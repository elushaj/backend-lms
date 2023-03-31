import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import { Link, useLocation } from "react-router-dom";

import EditBook from "../edit/EditBook";
import DeleteBook from "../delete/DeleteBook";
import useFetch from "../../../hooks/useFetch";
const BookSingle = ({ params }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
  const { data, loading, error } = useFetch(`/books/${path}`);
  console.log(data);

  return (
    <div className="single">
      {" "}
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {loading ? (
          <h3 className="loading-text">Loading...</h3>
        ) : error ? (
          <h3 className="error-text">{error}</h3>
        ) : (
          <div className="top">
            <div className="left">
              <h1 className="title">Information</h1>
              {data._id === path ? (
                <div className="item">
                  <img src={data.photo} alt="" className="itemImg" />
                  <div className="details">
                    <h1 className="itemTitle">{}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Title:</span>
                      <span className="itemValue">{data.title}</span>
                    </div>{" "}
                    <div className="detailItem">
                      <span className="itemKey">Author:</span>
                      <span className="itemValue">{data.author}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">ISBN:</span>
                      <span className="itemValue">{data.ISBN}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Language:</span>
                      <span className="itemValue">{data.language}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Published:</span>
                      <span className="itemValue">{data.published} </span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Stock:</span>
                      <span className="itemValue">{data.stock}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Category:</span>
                      <span className="itemValue">{data.category}</span>
                    </div>
                  </div>
                </div>
              ) : (
                "No data found"
              )}
            </div>
          </div>
        )}
      </div>
      <EditBook params={path} />
    </div>
  );
};

export default BookSingle;
