import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ImagesContainer from "./components/ImagesContainer";
import axios from "axios";
import Error from "./components/Error";
import Loader from "./components/Loader";
function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesList, setImagesList] = useState([]);
  const [imagesPerPage, setImagesPerPage] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageValue, setPageValue] = useState(1);
  const [authorFilter, setAuthorFilter] = useState("");
  const debounceRef = useState(undefined);
  const [isError, setIsError] = useState(false);
  const handelPageChange = (type) => {
    if (type === "prev") {
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        setPageValue((prev) => {
          if (prev === 1) {
            return 1;
          } else {
            return prev - 1;
          }
        });
      }, 300);
    } else {
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        setPageValue((prev) => prev + 1);
      }, 600);
    }
  };
  const getImages = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://picsum.photos/v2/list?page=${pageValue}&limit=${imagesPerPage}`
      );
      if (res.data.length !== 0) {
        setCurrentPage(pageValue);
      } else {
        setPageValue((prev) => prev - 1);
      }
      setLoading(false);
      if (authorFilter.length > 0) {
        const temp = res.data.filter((element) =>
          element.author.toLowerCase().includes(authorFilter.toLowerCase())
        );
        setImagesList((prev) => {
          prev = temp;
          if (prev.length === 0) {
            setIsError(true);
          } else {
            setIsError(false);
          }
          return prev;
        });
      } else {
        setIsError(false);
        setImagesList(res.data);
      }
    } catch (error) {
      setIsError(true);
      setLoading(false);
      console.log("error=", error);
    }
  };
  useEffect(() => {
    setIsError(false);
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageValue]);
  useEffect(() => {
    setIsError(false);
    const timer = setTimeout(() => {
      getImages();
    }, 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesPerPage]);

  useEffect(() => {
    setIsError(false);
    setLoading(true);
    const timer = setTimeout(() => {
      getImages();
    }, 600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authorFilter]);

  return (
    <div className="App">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        imagesPerPage={imagesPerPage}
        setImagesPerPage={setImagesPerPage}
        loading={loading}
        handelPageChange={handelPageChange}
        authorFilter={authorFilter}
        setAuthorFilter={setAuthorFilter}
      ></Header>
      <div className="container p-2-container">
        {isError ? (
          <Error
            errorMessage={
              "No result found on this page for the searched criterion."
            }
          />
        ) : (
          ""
        )}
        {loading ? <Loader /> : <ImagesContainer imagesList={imagesList} />}
      </div>
    </div>
  );
}

export default App;
