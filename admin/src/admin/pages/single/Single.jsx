import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useEffect, useState } from "react";
import Table from "../../components/table/Table";
import EditUser from "../edit/EditUser";
import axios from "axios";
const Single = ({params}) => {
  const location = useLocation();
  const [list, setList] = useState();
  const path = location.pathname.split("/")[2];
  console.log(path);

  const { data, loading, error } = useFetch(`/members/${path}`);

 console.log(data);
 const handleReturn = async (id) => {
  try {
    await axios.post(`/issues/returnBook/${id}`);
alert("Book marked as returned")
  } catch (err) {
    console.log(err)
    alert(err.response.data.message)

  }
};
  return (
    
    <div className="single">  <Sidebar />
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
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              /> {(data._id===path) ? 
              <div className="details">
                <h1 className="itemTitle">{}</h1>
                <div className="detailItem">
                  <span className="itemKey">Name:</span>
                  <span className="itemValue">{data.fullname}</span>
                </div>   <div className="detailItem">
                  <span className="itemKey">Surname:</span>
                  <span className="itemValue">{data.surname}</span>
                </div>   <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">{data.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.telephone_no}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
{data.address}                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Profession:</span>
                  <span className="itemValue">{data.profession}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">School:</span>
                  <span className="itemValue">{data.school}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Joined:</span>
                  <span className="itemValue">{data.joined}</span>
                </div>
              </div>: 'No data found'
          }  </div>
          </div>
          <div className="right">
          <table className="datatable">
            <thead>
  <tr>
    <th style={{width:100}}>ID</th>
    <th style={{width:200}}>Issue Data</th>
    <th style={{width:200}}>Return Date</th>
    <th style={{width:100}}></th>
 
  </tr>
</thead>
<tbody>
   {data.issue ===0 ?" No issues found" :
      <>
       
   {data.issue&&data.issue.map((item)=><tr> <td style={{width:100}}>{item._id}</td>
        <td style={{width:200}}>{item.issueDate}</td>
        <td style={{width:200}}>{item.returnDate}</td>    
        
    <td style={{width:100}}><button    onClick={() => handleReturn(item._id)} className="cellAction">Return </button></td>
      
    </tr>
      )}
      <tcol>
<tr>
    <th style={{width:200}}>Book Title</th>
    <th style={{width:200}}>Book Author</th>
 </tr>

  {data.books&&data.books.map((items)=><tr>
        <td style={{width:200}}>{items.title}</td>
        <td style={{width:200}}>{items.author }</td>
      </tr>
        )} 
    
 </tcol>
      </>
}
    </tbody>
</table>
         </div>
        </div>
         )}
         <EditUser params={path}/>
      </div>
       
    </div>
  );
};

export default Single;
