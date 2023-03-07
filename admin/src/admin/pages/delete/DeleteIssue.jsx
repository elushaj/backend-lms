import axios from 'axios';
import React, { useState } from 'react';
import {IoIosClose} from 'react-icons/io'
import {TiTick} from 'react-icons/ti'
import "./issueDelete.scss"
const DeleteIssue = ({ item }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleted,setDeleted]=useState(false);
  const handleDelete = () => {
    setShowConfirm(true);
  };

  const handleConfirm =async (e) => {
    setShowConfirm(false);
const res=await axios.delete(`/issues/${item}`)
setDeleted(true)

  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <div>
   
    <button  className="deleteButton" onClick={handleDelete}>Delete</button>
    {showConfirm && (
      <div className='confirm-box' >
        <p>Are you sure you want to delete this item?</p>
        <button onClick={handleConfirm}><TiTick/></button>
        <button onClick={handleCancel}><IoIosClose/></button>
      </div>
    )}

    {deleted ? <div>Item deleted successfully</div>:""}
  </div>
  );
};

export default DeleteIssue

















