import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    const [visitedCountries, setVisitedCountries] = useState([])
    const  handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    return (
        <div>
            <h1>I have visited: {visitedCountries.length} countries</h1>
            <ol>
            {
                visitedCountries.map(country=><li key={country.ccn3.ccn3}>{country.name.common}</li>)
            }
            </ol>
            <div className='countries'>
                {
                    countries.map((country) => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;