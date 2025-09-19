import React, { useState } from 'react';
import './country.css'
const Country = ({ country, handleVisitedCountries }) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        // system-1 
        // if (visited === false) {
        //     setVisited(true)
        // }
        // else {
        //     setVisited(false)
        // }

        // system 2
        // {

        //     setVisited(visited ? false: true) 
        // }

        //system 3
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    return (
        <div className={`country ${visited && "country-visited" }`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}>{visited ? "Visited" : "Not Visited"}</button>
        </div>
    );
};

export default Country;