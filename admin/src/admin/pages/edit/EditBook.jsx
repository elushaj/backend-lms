import React from "react";
import "./editBook.scss";
import SideBar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import DeleteBook from "../delete/DeleteBook";

const EditBook = ({ params }) => {
  const [file, setFile] = useState("");


  const [book, setBook] = useState({});
  const [inputs, setInputs] = useState({
    title: "",
    author: "",
    description: "",
    ISBN: "",
    language: "",
    published: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/books/${params}`, inputs);
      setBook(res.data);
      setInputs({
        title: "",
        author: "",
        description: "",
        ISBN: "",
        language: "",
        published: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const refreshPage = ()=>{
    window.location.reload();
 }
  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };
  return (
           
    <div className="new">
      <div className="newContainer">
        <div className="top">
          {" "}
          <h1>Edit Books</h1>
        </div>
        <div className="bottom">
        <div className="right">
          <div className="formInput">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={inputs.title}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={inputs.author}
                onChange={handleInputChange}
              />
              <input
                name="description"
                placeholder="Description"
                value={inputs.description}
                onChange={handleInputChange}
              />
              <input
                name="ISBN"
                placeholder="ISBN"
                value={inputs.ISBN}
                onChange={handleInputChange}
              />
               <input
                name="language"
                placeholder="Language"
                value={inputs.language}
                onChange={handleInputChange}
              />
               <input
                name="published"
                placeholder="Published"
                value={inputs.published}
                onChange={handleInputChange}
              />
              <button type="submit" onClick={refreshPage}>Update Book</button>
              <DeleteBook item={params}/>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
