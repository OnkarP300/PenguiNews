import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const pageSize = 18;
  const apiKey = process.env.REACT_APP_NEWS_API;

  // Top Loading bar progress 0 -> 100
  const [progress, setProgress] = useState(0);
  const progressBar = (progress) => {
    setProgress(progress);
  };

  const [country, setCountry] = useState("in");
  async function ctrOption(element) {
    let newCountry = await element.target.value11
    setCountry(newCountry);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar ctrOption={ctrOption} />
        <LoadingBar color="#7fa0d4" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={progressBar}
                key="home"
                pageSize={pageSize}
                country={country}
                headline="Top Headlines"
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={progressBar}
                key="business"
                pageSize={pageSize}
                country={country}
                headline="Business"
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={progressBar}
                key="entertainment"
                pageSize={pageSize}
                country={country}
                headline="Entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={progressBar}
                key="health"
                pageSize={pageSize}
                country={country}
                headline="Health"
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={progressBar}
                key="science"
                pageSize={pageSize}
                country={country}
                headline="Science"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={progressBar}
                key="sports"
                pageSize={pageSize}
                country={country}
                headline="Sports"
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={progressBar}
                key="technology"
                pageSize={pageSize}
                country={country}
                headline="Technology"
                category="technology"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
