import React from "react";
import "./newIssue.scss";
import SideBar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { useState } from "react";
import BookSearch from "../../components/search/BookSearch";
import axios from "axios";
import MemberSearch from "../../components/search/MemberSearch";
const NewIssue = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);
  const [results, setResults] = useState([]);
  const [inputs, setInputs] = useState({
    user: "",
  book: "",

  });
  const handleChange = (e) => {

    e.persist();
    setInputs((prev) => ({  ...prev, [e.target.id]: e.target.value}));
 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newIssue={
        ...inputs
      }
      const headers={
        "Content-type": "application/json",
      }
      let res = await axios.post(`/issues/newIssue`, newIssue,headers).then((response)=>{ console.log(response.data.message);})   .then(() => {
        
      });
      
  alert("Issue created successfully");
        console.log("success");
      } catch (error) {
        console.log(error);
        
  
        alert(error.response.data.message) ;
   
    };
  }

  return (
    <div className="new">
      <SideBar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{}</h1>
        </div>
        <div className="bottoms">
          <div className="box">
          
         <BookSearch/>
<MemberSearch/>
    </div>
   
        </div>     <form onSubmit={handleSubmit}>    
      <div className="issue-inputs">  <label>Book ID</label> 
    <input placeholder="Book ID"  onChange={handleChange} id="book" value={inputs.book._id} required/>
   </div> 
   <div className="issue-inputs"><label>Member ID</label>
     <input placeholder="Member ID"  onChange={handleChange} id="user" value={inputs.user._id} required/>
     </div> <button type="submit" >Add Issue</button> </form> 
      </div>
    </div>
  );
};

export default NewIssue;
