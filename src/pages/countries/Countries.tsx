import React, { useEffect, useState } from 'react';
import PreviewTable from '../../components/preview-table/PreviewTable';

const Countries = () => {
    const [filteredCountry, setFilteredCountry] = useState('');
    const [countriesData, setCountriesData] = useState<any>([]);

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries')
            .then(response => response.json())
            .then(data => setCountriesData(data))
    }, []);

    const filterCountries = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filterText = e.target.value;
        setFilteredCountry(filterText);
    }

    const filteredCountries = countriesData.filter((country: any) => {
        return country.country.toLowerCase().includes(filteredCountry.toLowerCase());
    });

    return (
        <>
            <input type="text" onChange={filterCountries} />
            <PreviewTable countriesData={filteredCountries} />
        </>
    );
}

export default Countries;