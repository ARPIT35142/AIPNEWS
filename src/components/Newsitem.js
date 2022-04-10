import React from "react";
import defaultImage from "../assets/default-image.jpg";

const Newsitem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card shadow-sm">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge bg-danger">{source}</span>
        </div>
        <img
          src={!imageUrl ? defaultImage : imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author}
            </small>
            <br />
            <small className="text-muted">
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-outline-danger"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
