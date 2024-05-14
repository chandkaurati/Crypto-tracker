import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";


function Search({search, event}) {
  return (
    <div className="flex focus:border justify-start  gap-3 items-center text-[var(--gray)] w-[80%] bg-[var(--darkgray)] p-3 rounded-full ml-auto mr-auto">
      <SearchIcon />
      <input
        className="bg-[var(--darkgray)]
     w-full outline-none border-none
    "
    value={search}
    onChange={event}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
