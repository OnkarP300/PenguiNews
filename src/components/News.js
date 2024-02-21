import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import data1 from "../anotherOutput.json"


const News = (props) => {
  const capFirstLetter = (str) => {
    if (str !== "general") {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return "Top headlines";
    }
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [search, setSearch] = useState("")

  const updateNews = async () => {
    props.setProgress(10);

    let parsedData = data1;
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&category=${props.category}&page=${page}`;
    // let data = await fetch(url);
    props.setProgress(30);
    // let parsedData = await data.json();
    props.setProgress(40);

    // Search Filter
    const filterData = parsedData.articles.filter((value) => {
      return value.title.toLowerCase().includes(search);
    })

    setArticles(search.length !== 0 ? filterData : parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);

  };

  // Use Effect hook
  useEffect(() => {
    updateNews();
    props.category !== "general" && (document.title = `${capFirstLetter(props.category)} - PenguinNews`);
    // eslint-disable-next-line
  }, [search, props.country]);

  // Get data on "Infinite scroll"
  const fetchMoreData = async () => {
    setPage(page + 1);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country
      }&apiKey=${props.apiKey}&pageSize=${props.pageSize}&category=${props.category
      }&page=${page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // Search Filter
    const filterData = parsedData.articles.filter((value) => {
      return value.title.toLowerCase().includes(search);
    })
    setArticles(search.length !== 0 ? articles.concat(filterData) : articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };



  return (
    <>
      {/* Search filter  */}
      <span className="d-flex justify-content-end fixed-top mx-3 my-1 searchbar" style={{ position: "fixed", top: "10px", right: "20px!important" }}>
        <form role="search" action="#" onSubmit={(e) => e.preventDefault()}>
          <input className="form-control bg-dark me-4" data-bs-theme="dark" type="search" value={search} placeholder="Search" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
        </form>
      </span>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
        className="my-4"
      >
        <div className="container my-4">
          <h1 className="my-4">
            <strong>&#128039;PenguiNews - {props.headline}</strong>
          </h1>
          {loading && <Spinner />}
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 70) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 130)
                        : ""
                    }
                    imgUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://as2.ftcdn.net/v2/jpg/05/81/83/27/1000_F_581832750_L179q1zJDSTPfCEkEyRReooNOPQuHFym.jpg"
                    }
                    newsUrl={element.url}
                    time={new Date(element.publishedAt).toGMTString()}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      <div style={{ position: "fixed", bottom: "20px", right: "30px" }}>
        <button
          // disabled={document.documentElement.scrollTop === 0 ? true : false}
          type="button"
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
          className="btn btn-dark rounded-pill"
        >
          &uArr;
        </button>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 18,
  category: "general",
  headline: "Top Headlines",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  headline: PropTypes.string,
};

export default News;
