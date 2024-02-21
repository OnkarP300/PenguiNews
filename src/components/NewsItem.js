import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, time, author, source } = props;
  return (
    <div className="container">
      <div className="card bg-transparent shadow-lg text-light my-3" style={{ display: "flex", alignItems: "center", }}>
        <span className="position-absolute top-0  badge rounded-pill bg-danger" style={{ left: "-5%", transform: "translate(0%,-50%)" }}>
          {source}
        </span>
        <img src={imgUrl} className="card-img-top" alt="..." style={{ height: "222px", maxWidth: "394px" }} />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            {title.length < 70 ? "" : "..."}
          </h5>
          <p className="card-text">
            {description}
            {description.length < 130 ? "" : "..."}
          </p>
          <p className="card-text">
            <small className="text-body-dark">
              By {author ? author : "Unknown"} on {time}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btn-sm d-md-flex justify-content-md-center"
          >
            For more details click here!
          </a>
        </div>
      </div>
    </div>
  );
}
export default NewsItem;
