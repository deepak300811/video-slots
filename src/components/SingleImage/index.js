import React from "react";
import "./style.css";
const SingleImage = ({ imageData }) => {
  let download_url = imageData?.download_url.split("/");
  if (download_url) {
    download_url[download_url.length - 1] = 267;
    download_url[download_url.length - 2] = 367;
    download_url = download_url.join("/");
  }

  return (
    <a
      className="single-image"
      href={imageData.url}
      target="_blank"
      rel="noreferrer"
    >
      <img src={download_url} alt={imageData.author} />
      <section className="detail-section">
        <p className="author-text">{imageData.author}</p>
        <p>#{imageData.id}</p>
      </section>
    </a>
  );
};

export default SingleImage;
