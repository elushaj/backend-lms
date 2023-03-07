import React from 'react'
import SideBar  from '../../components/sidebar/SideBar.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import './list.scss'
import IssueDatatable from '../../components/datatable/IssueDatatable.jsx'
const IssueList = ({columns}) => {
  return (
    <div className='list'>
    <SideBar/>
    <div className='listContainer'>
      <Navbar/>
<IssueDatatable columns={columns}/>
    </div>
    </div>
  )
}

export default IssueList