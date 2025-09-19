import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries

    const [visitedImgUrl, setVisitedImgUrls] = useState([])
    const handleImgUrl = (flags) =>{
        const newVisitedImgUrl = [...visitedImgUrl, flags]
        setVisitedImgUrls(newVisitedImgUrl)
    }

    const [visitedCountries, setVisitedCountries] = useState([])
    const  handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <h2>I have visited: {visitedCountries.length} countries</h2>
            <h2>Total flegs visited: {visitedImgUrl.length}</h2>
            <div className='flags-container'>
                {
                    visitedImgUrl.map((url, index)=><img key={index} src={url}></img>)
                }
            </div>

            <ol>
            {
                visitedCountries.map(country=><li key={country.ccn3.ccn3}>{country.name.common}</li>)
            }
            </ol>
            <div className='countries'>
                {
                    countries.map((country) => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries} handleImgUrl={handleImgUrl}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;