import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import {
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Detail.sass";

const Detail = (props) => {
  const selectedArticleId = props.match.params.id;
  const reqUrl = `http://localhost:1337/articles/${selectedArticleId}`;
  const [selectedArticle, setSelectedArticle] = useState({});
  const [emptyData, setEmptyData] = useState(false);

  useEffect(() => {
    fetch(reqUrl)
      .then((response) => response.json())
      .then((data) => {
        setSelectedArticle(data);
      })
      .catch((error) => {
        setEmptyData(true);
      });
  }, []);

  return (
    <div className="detail-container">
      <Link to="/">
        <div className="back-to-listing-button">
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
        </div>
      </Link>
      {emptyData ? (
        <div>Not Found...</div>
      ) : !Object.keys(selectedArticle).length ? (
        <Loader type="ThreeDots" color="#dddddd" height={500} />
      ) : (
        <div>
          <h2>{selectedArticle.title}</h2>
          <p>
            <span>Writer: </span>
            {selectedArticle.writer}
          </p>
          <p>
            <span>Detail: </span>
            {selectedArticle.detail}
          </p>
          <p>
            <span>Date: </span>
            {selectedArticle.date}
          </p>
        </div>
      )}
    </div>
  );
}

export default Detail;
