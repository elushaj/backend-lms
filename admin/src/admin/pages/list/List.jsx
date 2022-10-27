import React from 'react'
import SideBar  from '../../components/sidebar/SideBar.jsx'
import Navbar from '../../components/navbar/Navbar.jsx'
import './list.scss'
import Datatable from '../../components/datatable/Datatable.jsx'
const List = () => {
  return (
    <div className='list'>
    <SideBar/>
    <div className='listContainer'>
      <Navbar/>
<Datatable/>
    </div>
    </div>
  )
}

export default List