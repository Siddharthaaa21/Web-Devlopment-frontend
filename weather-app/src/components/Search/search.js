//component used in pakages we installed 
import React, { useState } from 'react'
import {AsyncPaginate} from "react-select-async-paginate"

 const Search=()=> {
  const [search, setSearch]=useState(null); 
  const handleOnChange={seacrhData}=>{
    setSearch(seacrhData); 
  }

  return (
    // AsyncPaginate is a term used for loadinf data in pages asyncronously means data is fetched and displayed without blocking user interface 
    //could change the appereacne props and hooks 
    <AsyncPaginate  
    placeholder="Search For City"
    debounceTimeout={600}
    value={search}
    onChange={handleOnChange}/>
  )
}
export default Search;