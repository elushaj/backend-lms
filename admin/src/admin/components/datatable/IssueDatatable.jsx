import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { Link, useLocation,useParams } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch.js";
import axios from "axios";
import DeleteIssue from "../../pages/delete/DeleteIssue";

const IssueDatatable = ({columns}) => {
  const{ pageNumber} = useParams().pageNumber||1;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(pageNumber);
  const [pages, setPages] = useState(1);
  const [text, setText] = useState("waiting...");
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      let isCancelled = false;
      try {
        const res = await fetch(`/issues/paginationIssues?page=${page}`);

        const { data, pages: totalPages } = await res.json();
        setPages(totalPages);
        setPosts(data);
        setLoading(false);
        if (!isCancelled) {
          setText("done!");
        }
 
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Some error occured");
        isCancelled = true;
      }
    };

    fetchPosts();
  }, [page]);  
  
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  

  useEffect(() => {
    setList(posts);
  }, [posts]);



  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };
  const handleReturn = async (id) => {
    try {
      await axios.post(`/issues/returnBook/${id}`);
  alert("Book marked as returned")
    } catch (err) {
      console.log(err)
      alert(err.response.data.message)
  
    }
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
           
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
          
              Delete
            </div>
          </div>
        );
      },
    },

  ];


console.log(posts)

  return (<>
    {loading ? (
      <h3 className="loading-text">Loading...</h3>
    ) : error ? (
      <h3 className="error-text">{error}</h3>
    ) : (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>

      
      <table className="datatable">
        <tbody>
        <tr>
          <th style={{width:100}}>ID</th>
          <th style={{width:200}}>Issue Data</th>
          <th style={{width:200}}>Return Date</th>
          <th style={{width:200}}>Book</th>
          <th style={{width:200}}>User</th>
          <th style={{width:200}}></th>
        </tr>
        {posts.map((val, key) => {
          return (
            <tr key={key} className="issue_row">
              <td style={{width:100}}>{val._id}</td>
              <td style={{width:200}}>{val.createdAt}</td>
              <td style={{width:200}}>{val.returnDate}</td>
              {val.book.map((item)=><td style={{width:200}}>{item.title}</td>)}
              {val.user.map((item)=><td style={{width:200}}>{item.fullname + ' ' + item.surname}</td>)}
<td>
           <button    onClick={() => handleReturn(val._id)} className="cellAction">Return </button>
            </td>
           <td style={{width:200}}><div className="cellAction">
           
           <DeleteIssue item={val._id}
              />
           </div></td>
           
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
    
     )}
      <Pagination page={page} pages={pages} changePage={setPage} />

    </>
  );
};

export default IssueDatatable;