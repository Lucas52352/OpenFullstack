import React from "react";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import Search from "./Components/Search";

const CountryList = () => {

    const [countries, setCountries] = useState([]) 
    const [languages, setLanguages] = useState([])
    const [searchField, setSearchField] = useState('')
    const [showInfo, setShowInfo] = useState(false);
  
      useEffect(()=>{ 
    const fetchCountries = async () =>{
    if (!searchField) {return}
    const response = await axios.get(`https://restcountries.com/v3.1/name/${searchField}`)
    setCountries(response.data)
    if (countries.length === 1) {
      setLanguages(countries[0].languages)
    }
    
  };
  
    fetchCountries()
    }, [searchField])
  
    const handleChange = event => {
      setSearchField(event.target.value);
    }
  
    const handleClick = event => {
      setShowInfo(current => !current);
    }
  

    return(

        
            <div>
              Find Countries
              <Search onChange={handleChange} placeholder="Search Country"/>
                {countries.length > 10 ? <p>Too many matches</p> : countries.map(country => (
                    <li key={country.name.common}>
                  {country.name.common} 
        
                  <button onClick={handleClick}>Show info</button>
                    {showInfo && (
                     <div> 
                      {countries.length === 1 && <h4>Capital</h4>}
                      {countries.length === 1 && countries[0].capital}
            
                      {countries.length === 1 && <h4>Population</h4>}
                      {countries.length === 1 && countries[0].population}
              
                      {countries.length === 1 && <h4>Languages</h4>}
        
                      {countries.length === 1 && Object.values(languages).map(language => (
                        <li key={Object.values(language)}>
                          {language}
                        </li>
                    ))}
        
              {countries.length === 1 && <h4>Flag</h4>}
              {countries.length === 1 && <img src={countries[0].flags.png} alt="flag.png"></img>}
                    </div>
              )}
                </li>
                ))
              }
        
        
        
            </div>
              
          )
}

export default CountryList;