import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "../../../hooks/useFetch";

const List = () => {
  // const rows = [
  //   {
  //     id: 1143155,
  //     product: "Acer Nitro 5",
  //     img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "John Smith",
  //     date: "1 March",
  //     amount: 785,
  //     method: "Cash on Delivery",
  //     status: "Approved",
  //   },
  //   {
  //     id: 2235235,
  //     product: "Playstation 5",
  //     img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "Michael Doe",
  //     date: "1 March",
  //     amount: 900,
  //     method: "Online Payment",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2342353,
  //     product: "Redragon S101",
  //     img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "John Smith",
  //     date: "1 March",
  //     amount: 35,
  //     method: "Cash on Delivery",
  //     status: "Pending",
  //   },
  //   {
  //     id: 2357741,
  //     product: "Razer Blade 15",
  //     img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "Jane Smith",
  //     date: "1 March",
  //     amount: 920,
  //     method: "Online",
  //     status: "Approved",
  //   },
  //   {
  //     id: 2342355,
  //     product: "ASUS ROG Strix",
  //     img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
  //     customer: "Harold Carol",
  //     date: "1 March",
  //     amount: 2000,
  //     method: "Online",
  //     status: "Pending",
  //   },
  // ];
  
  const {data,loading,error} = useFetch('/members')
  return (

    <TableContainer component={Paper} className="table">
      {loading && <div>Loading...</div>}
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">Username</TableCell>
            <TableCell className="tableCell">Full Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Telephone No.</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Profession</TableCell>
            <TableCell className="tableCell">Joined </TableCell>
            <TableCell className="tableCell">Violation Flag </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {data && data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="tableCell">{item.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {/* <img src={row.img} alt="" className="image" /> */}
                  {item.fullname}
                </div>
              </TableCell>
              <TableCell className="tableCell">{item.username}</TableCell>
              <TableCell className="tableCell">{item.email}</TableCell>
              <TableCell className="tableCell">{item.address}</TableCell>
              <TableCell className="tableCell">{item.joined}</TableCell>
              <TableCell className="tableCell">
                {/* <span className={`status ${item.status}`}>{row.status}</span> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
