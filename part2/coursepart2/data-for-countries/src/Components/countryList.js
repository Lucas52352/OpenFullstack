import React from "react";
import {useState, useEffect} from "react";
import axios from 'axios';
import Search from "./Search";
import { useNavigate } from "react-router-dom";

const CountryList = () => {

  const [countries, setCountries] = useState([]) 
  const [searchField, setSearchField] = useState('')
  const navigate = useNavigate()

  
  useEffect(()=>{ 

    const fetchCountries = async () =>{
    if (!searchField) {return}

    const response = await axios.get(`https://restcountries.com/v3.1/name/${searchField}`)
    setCountries(response.data)

    };

    fetchCountries()
  }, [searchField])

  const handleChange = event => {
    setSearchField(event.target.value);
  }

  const handleOnClick = (name) => {
    navigate(`../country/${name}`)
  }

  return(
    <div>

      Find Countries

      <Search onChange={handleChange} placeholder="Search Country"/>

      {countries.length > 10 ? <p>Too many matches</p> : countries.map(country => (

        <li key={country.name.common}>

          {country.name.common}        

          <button onClick={() => handleOnClick(country.name.common)}>Show info</button>  

        </li>

        ))

      }

    </div>  

  )
  
}

export default CountryList;