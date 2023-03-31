import React from 'react'
import useFetch from "../../../hooks/useFetch.js";
import './notification.scss'
const Notification = ({memberid}) => {

 const { data, loading, error } = useFetch(`/issues/overDue/${memberid}`);



 return(
  <div className='notification'> 


        <div className='alert'>
 {data}
        </div>
  
  </div>
 )
}

export default Notification