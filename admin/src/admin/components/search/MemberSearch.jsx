import React, { useState } from "react";
import './searchwidget.scss'
import { Link } from "react-router-dom";
import axios from "axios";
import SearchWidget from "./SearchWidget";

const MemberSearch=()=>{
const [searchTerm, setSearchTerm]=useState('')
const [results,setResults] = useState([])

const handleSearch=async(e)=>{
    e.preventDefault()
    const result=await axios.get(`/users/searchUser/${searchTerm}`)

setResults(result.data)
}

return(
    <div>
    <form onSubmit={handleSearch} className='srch-form'>
      <input
      className="srch-input"
        type="text"
        placeholder="Search members..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="search__button srch-button">Search</button>
    </form>
    
    <div className="search-sec">
      
     
      <table className="datatable">
        <tbody>
      <tr>
        <th style={{width:200}}>ID</th>
        <th style={{width:200}}>Name</th>
        <th style={{width:200}}>Surname</th>
        <th style={{width:200}}>Username</th>
        <th style={{width:200}}>Email</th>
        <th style={{width:200}}>Address</th>
        <th style={{width:200}}>Phone</th>

      </tr>
      {results&&results.map((val, key) => {
        return (
          <tr key={key}>
            <td style={{width:200}}>{val._id}
            </td>
            <td style={{width:200}}>{val.fullname}</td>
            <td style={{width:200}}>{val.surname}</td>
            <td style={{width:200}}>{val.username}</td>
            <td style={{width:200}}>{val.email}</td>
            <td style={{width:200}}>{val.address}</td>
            <td style={{width:200}}>{val.telephone_no}</td>
            <td style={{width:200}}> <Link to={`/members/${val._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link></td>
       
  
          </tr>
        )
      })}
      </tbody>
    </table>
      </div>
    
  </div>
)

}

export default MemberSearch;