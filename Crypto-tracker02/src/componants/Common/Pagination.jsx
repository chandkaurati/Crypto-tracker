import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";

export default function PaginationControlled({ page, handlePageChange }) {
   function handlePageChange(e){
     console.log(e.target.value)
   }
  return (
    <div className="pagination-div">
    <Pagination count={10} />
    </div>
  );
}