import React from "react";
import{RiLoginBoxLine,RiLogoutBoxRLine} from 'react-icons/ri'
import {BsFillPersonFill,BsBookmarkCheck,BsBook} from 'react-icons/bs'
import "./widget.scss";
import useFetch from "../../../hooks/useFetch.js";
import { Link } from "react-router-dom";
const Widget = ({type}) => {

  const {data,loading,error}=useFetch("/members/counter/countType")
  console.log(data)



  return (
<>
{loading ? (
        "Loading"
      ) : (
<>
    <div className="widget">
      <div className="left">
        <span className="title">MEMBERS</span>
        <span className="counter">{data[0]}</span>
        <span className="link"><Link to="/users" style={{textDecoration:'none'}}>See all members</Link></span>
      </div>
      <div className="right">
      <BsFillPersonFill className='icon'  />
    
      </div>
    </div>
    <div className="widget">
      <div className="left">
        <span className="title">BOOKS</span>
        <span className="counter">{data[1]}</span>
        <span className="link"><Link to="/books" style={{textDecoration:'none'}}>See all books</Link></span>
      </div>
      <div className="right">

      <BsBook className="icon"/>
    
      </div>
    </div>
    <div className="widget">
      <div className="left">
        <span className="title">ISSUES</span>
        <span className="counter">{data[2]}</span>
        <span className="link"><Link to="/issues" style={{textDecoration:'none'}}>See all issues</Link></span>
      </div>
      <div className="right">
      <RiLogoutBoxRLine className="icon"/>
    
      </div>
    </div> 

    </>)}</>
  );
};

export default Widget;
