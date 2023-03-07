import React from "react";
export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "fullname",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "username",
    headerName: "Username",
    width: 100,
  },

  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const bookColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "title",
    headerName: "Title",
    width: 150,
  },
  {
    field: "author",
    headerName: "Author",
    width: 100,
  },
  {
    field: "category",
    headerName: "Category",
    width: 100,
  },
  {
    field: "stock",
    headerName: "Stock",
    width: 100,
  },
];

export const issueColumns = [
  { field: "_id", headerName: "ID", width: 70 },

  {
    field: "createdAt",
    headerName: "Issue Date",
    width: 300,
    
  },
  {
    field: "returnDate",
    headerName: "Return Date",
    width: 300,
  },
  {
    field: "returnDate",
    headerName: "Return Date",
    width: 300,
  },
];