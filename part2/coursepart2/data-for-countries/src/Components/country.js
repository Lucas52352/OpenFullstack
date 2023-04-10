import React, { useState, useEffect } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import axios from "axios";


const Country = () => {

    const [countryData, setCountryData] = useState({})
    const [flag, setFlag] = useState('')

    const [name, setName] = useState('')
    const [languages, setLanguages] = useState([])

    const [capital, setCapital] = useState('')
    const routeMatch = useMatch('/country/:name')

    const country = routeMatch.params.name
    const navigate = useNavigate()

    const api_key = process.env.REACT_APP_API_KEY
    const [weatherData, setWeatherData] = useState({
        temperature:'',
        direction:'', 
        velocity:'',
        img:''
    })

    useEffect (()=>{

        const fetchCountry = async () => {

          const response = await axios.get(`https://restcountries.com/v3.1/name/${country}?fullText=true`) 

            setCountryData(response.data[0])    
            setName(response.data[0].name.common)

            setFlag(response.data[0].flags.png)
            setLanguages(response.data[0].languages) 

            setCapital(response.data[0].capital)

          const weatherResponse = await axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${response.data[0].capital}`)

            setWeatherData({

                temperature: weatherResponse.data.current.temperature,
                direction: weatherResponse.data.current.wind_dir,

                velocity: weatherResponse.data.current.wind_speed,
                img: weatherResponse.data.current.weather_icons
            })
            
        }

        fetchCountry();    
    }, [])

    return (

        <div>

            <button onClick={()=>navigate(-1)}>Go Back Home</button>

            <h3> Country: </h3>
            {name} <br/>

            <h3> Capital: </h3>
            {capital} <br/>

            <h3> Population: </h3>
            {countryData.population} <br/>

            <h3>Languages:</h3> 
            {Object.values(languages).map(language => 
                <li key={Object.values(languages)}>
                    • {language}
                </li>
            )}

            <h3>Flag:</h3>
            <img src={flag} alt='flags.png'></img> <br/>

            <h3> Wheather in {capital}:</h3>
        
            <p>
                Temperature: {weatherData.temperature}°C <br/>

                <img src={weatherData.img} alt='weather icon'></img> <br/>

                Wind:
                {weatherData.velocity} mph 
                {weatherData.direction}
                
            </p>
            
        </div>
        
    )
} 

export default Country;