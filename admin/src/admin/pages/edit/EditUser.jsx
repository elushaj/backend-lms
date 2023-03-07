import React from "react";
import "./editBook.scss";
import SideBar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import DeleteMember from "../delete/DeleteMember";

const EditUser = ({ params }) => {
  const [file, setFile] = useState("");


  const [user, setUser] = useState({});
  const [inputs, setInputs] = useState({
    fullname: "",
    surname: "",
    email: "",
    username: "",
    telephone_no: "",
    address: "",
    password:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/users/${params}`, inputs);
      setUser (res.data);
      setInputs({
        fullname: "",
        surname: "",
        email: "",
        username: "",
        telephone_no: "",
        address: "",
        password:""
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
          <h1>Edit User</h1>
        </div>
        <div className="bottom">
        <div className="right">
          <div className="formInput">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullname"
                placeholder="Name"
                value={inputs.fullname}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={inputs.surname}
                onChange={handleInputChange}
              />
              <input
                name="email"
                placeholder="E-mail"
                value={inputs.email}
                onChange={handleInputChange}
              />
 <input
                name="username"
                placeholder="Username"
                value={inputs.username}
                onChange={handleInputChange}
              />
               <input
                name="telephone_no"
                placeholder="Telephone_no"
                value={inputs.telephone_no}
                onChange={handleInputChange}
              />
               <input
                name="address"
                placeholder="Address"
                value={inputs.address}
                onChange={handleInputChange}
              />
              <input
                name="password"
                placeholder="Password"
                type="password"
                value={inputs.password}
                onChange={handleInputChange}
              />
              <button type="submit" onClick={refreshPage}>Update User</button>
          <DeleteMember item={params}/>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
