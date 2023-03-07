import React from "react";
import "./table.scss";
import useFetch from "../../../hooks/useFetch";
import { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Table = ({paths}) => {
  const { data, loading, error } = useFetch(`/members/${paths}`);

 
  const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //    const res = await fetch(`/members/6386fa503c705d5249f6ef63`);
    //     const data=await res.json();
    //     setPosts(data);
    //     console.log(res)
    //     console.log(data)
    //   }
    //   fetchData()
    // }
    // ,[])
  //   fetchData()
  // }, []);
//     useEffect(() => {
//   const abortController = new AbortController()   // creating an AbortController
//   fetch(url, { signal: abortController.signal })  // passing the signal to the query
//     .then(data => {
//       setState(data)                              // if everything went well, set the state
//     })
//     .catch(error => {
//       if (error.name === 'AbortError') return     // if the query has been aborted, do nothing
//       throw error
//     })
  
//   return () => {
//     abortController.abort() 
//   }
// }, [])
  
console.log(data)
  return (

    <div className="right">  <h1 className="title">Last Transactions</h1>
    <table className="datatable">
  <tr>
    <th style={{width:100}}>ID</th>
    <th style={{width:200}}>Issue Data</th>
    <th style={{width:200}}>Return Date</th>
    <th style={{width:200}}>Book Title</th>
    <th style={{width:200}}>Book Author</th>
    <th style={{width:200}}></th>
  </tr>

   
      <tr>
        <td style={{width:100}}>{data._id}</td>
        <td style={{width:200}}>{data.issueDate}</td>
        <td style={{width:200}}>{data.returnDate}</td>
        <td style={{width:200}}>{data.title}</td>
        <td style={{width:200}}>{data.author}</td>

     <td style={{width:200}}><div className="cellAction">
     
    
    
    </div></td>
      </tr>
    
</table>

   </div>

  );

};

export default Table;
