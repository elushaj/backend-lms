import React from "react";
import "./newUser.scss";
import SideBar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { useState } from "react";
import axios from "axios";

const NewUser = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [info, setInfo] = useState({});
  const [focused, setFocused] = useState(false);
  const [success,setSuccess] = useState(false) 
  const handleChange = (e) => {
    e.persist();

    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleFocus = (e) => {
    setFocused(true);
  };
  const handleClick = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dzxdzqayq/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newUser = {
        ...info,
        photo: url,
        isAdmin: info.isAdmin === "true"
      };
      const headers={
        "Content-type": "application/json",
      }
     let response= await axios.post("/auth/register", newUser,headers).then((response)=>{ })   .then(() => {
      window.location.reload();
    });

      console.log("success");
      alert("Member added successfully");
      setSuccess(true)
    } catch (err) {
      console.log(err);
      
      alert(err.response.data.message );}
    
  };

  return (
    <div className="new">
      <SideBar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <AiOutlineFolderOpen className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    onChange={handleChange}
                    placeholder={input.placeholder}
                    id={input.id}
                    onBlur={handleFocus}
                    onFocus={() => setFocused(true)}
                    focused={focused.toString()}
                    required
                  />
                  <span>{input.errorMessage}</span>
                </div>
              ))}
              <div className="selectRole">
                <label>Role</label>
                <select id="isAdmin" onChange={handleChange}>
                  <option value={false} defaultValue>
                    Member
                  </option>
                  <option value={true}>Admin</option>
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
              {success? "User added successfully":" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
