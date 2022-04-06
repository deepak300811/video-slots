import React from "react";
import SingleImage from "../SingleImage";
import "./style.css";
const ImagesContainer = ({ imagesList }) => {
  return (
    <>
      <section className="images-container">
        {imagesList.length > 0 &&
          imagesList.map((element) => {
            return <SingleImage imageData={element} key={element.id} />;
          })}
      </section>
    </>
  );
};

export default ImagesContainer;
