import React from 'react'
import SideBar  from '../../components/sidebar/SideBar.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import './list.scss'
import BookDatatable from '../../components/datatable/BookDatatable.jsx'
const BookList = ({columns}) => {
  return (
    <div className='list'>
    <SideBar/>
    <div className='listContainer'>
      <Navbar/>
<BookDatatable columns={columns}/>
    </div>
    </div>
  )
}

export default BookList