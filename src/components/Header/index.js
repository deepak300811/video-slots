import React from "react";
import "./style.css";
const Header = ({
  currentPage,
  setImagesPerPage,
  imagesPerPage,
  handelPageChange,
  authorFilter,
  setAuthorFilter,
}) => {
  const handelImagesPerPageChange = (e) => {
    if (
      (e.target.value > 0 && e.target.value <= 100) ||
      e.target.value === ""
    ) {
      setImagesPerPage(e.target.value);
    }
  };
  const handelChangeName = (e) => {
    setAuthorFilter(e.target.value);
  };
  return (
    <header className="main-header">
      <div className="container header-items">
        <section className="left fs-1-5 small-screen-small">
          <p className="mr-1">Images per page : </p>
          <input
            className="fs-1 input-field"
            type="number"
            value={imagesPerPage}
            placeholder="30"
            onChange={(e) => handelImagesPerPageChange(e)}
          ></input>
        </section>
        <section className="right fs-1-5 small-screen-small">
          <input
            className="input-field filter mr-1"
            type="text"
            value={authorFilter}
            placeholder="Search Author By Name"
            onChange={(e) => handelChangeName(e)}
          />
          <p className="next-prev">
            <i
              className={`fa-solid fa-angle-left mr-1  cursor-pointer `}
              onClick={() => handelPageChange("prev")}
            ></i>
            <span className="">{currentPage}</span>
            <i
              className={`fa-solid fa-angle-right ml-1  cursor-pointer `}
              onClick={() => handelPageChange("next")}
            ></i>
          </p>
        </section>
      </div>
    </header>
  );
};

export default Header;
