import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NotFound.sass";

function NotFound() {
  return (
    <>
      <Link to="/">
        <div className="back-to-listing-button">
          <FontAwesomeIcon icon={faArrowLeft} className="icon" />
        </div>
      </Link>
      <img src="/404.jpg" />
    </>
  );
}

export default NotFound;
