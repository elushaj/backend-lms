import axios from 'axios';
import React, { useState } from 'react';
import {MemoryRouter} from "react-router-dom"
const DeleteMember = ({ item, onDelete }) => {
  const [showConfirm, setShowConfirm] = useState(false);
const [deleted,setDeleted]=useState(false);
  const handleDelete = () => {
    setShowConfirm(true);
  };

  const handleConfirm =async (e) => {
    setShowConfirm(false);
const res=await axios.delete(`/users/${item}`) 

 setDeleted(true)
};

  const handleCancel = () => {
    setShowConfirm(false);

  };

  return (
    <div>
      <p>{item.name}</p>
      <button onClick={handleDelete}>Delete</button>
      {showConfirm && (
        <div>
          <p>Are you sure you want to delete this member?</p>
          <button onClick={handleConfirm}>Confirm</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}

      {deleted ? <div>Member deleted successfully</div>:""}
    </div>
  );
};

export default DeleteMember;
