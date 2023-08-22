//component used in pakages we installed 
import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"
import { GEO_API_url, geoApiOption } from '../../api';

const Search = ({ onSeacrchChange }) => {
  const [search, setSearch] = useState(null);
  const handleOnChange = (data_entered) => {
    setSearch(data_entered);
    onSeacrchChange(data_entered);
  }
  const loadOptions = (inputVal) => {
    return fetch(`${GEO_API_url}?minPopulation=1000000&namePrefix=${inputVal}`, geoApiOption)
      .then((response) => response.json())
      .then((response) => {
        console.log('API Response:', response); // Log the entire API response
        const options = response.data.map((city) => ({
          value: `${city.latitude} ${city.longitude}`,
          label: `${city.name} ${city.countryCode}`,
        }));
        console.log('Options:', options); // Log the transformed options array
        return { options };
      })
      .catch((err) => { 
        console.error(err);
      });
  };
  
  
  
  
  //to load options for the pages and takes the variable input val

  return (
    // AsyncPaginate is a term used for loadinf data in pages asyncronously means data is fetched and displayed without blocking user interface 
    //could change the appereacne props and hooks 
    <AsyncPaginate
      placeholder="Search For City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions} />
  )
}
export default Search;