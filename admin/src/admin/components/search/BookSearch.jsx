import React, { useState } from "react";
import { Link } from "react-router-dom";
import './searchwidget.scss'
import axios from "axios";
import SearchWidget from "./SearchWidget";

const BookSearch=()=>{
const [searchTerm, setSearchTerm]=useState('')
const [results,setResults] = useState([])

const handleSearch=async(e)=>{
    e.preventDefault()
    const result=await axios.get(`/books/searchBooks/${searchTerm}`)

setResults(result.data)
}

return(
    <div>
    <form onSubmit={handleSearch} className='srch-form'>
      <input
            className="srch-input"

        type="text"
        placeholder="Search books..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="search__button srch-button">Search</button>
    </form>
    
    <div className="search-sec">
      
     
      <table className="datatable" >
        <tbody>
      <tr>
      <th style={{width:200}}>ID</th>
        <th style={{width:100}}>ISBN</th>
        <th style={{width:200}}>Title</th>
        <th style={{width:200}}>Author</th>
        <th style={{width:200}}>Category</th>
        <th style={{width:200}}>Stock</th>
        <th style={{width:200}}></th>
      </tr>
      {results&&results.map((val, key) => {
        return (
          <tr key={key}>
            <td style={{width:200}}>{val._id} </td>
            <td style={{width:100}}>{val.ISBN} </td>
            <td style={{width:200}}>{val.title}</td>
            <td style={{width:200}}>{val.author}</td>
            <td style={{width:200}}>{val.category}</td>
            <td style={{width:200}}>{val.stock}</td>
            <td style={{width:200}}> <Link to={`/books/${val._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            </td>
         
       
  
          </tr>
        )
      })}
      </tbody>
    </table>
      </div>
    
  </div>
)

}

export default BookSearch;