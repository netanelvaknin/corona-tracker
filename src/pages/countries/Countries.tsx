import React, { useEffect, useState } from 'react';
import PreviewTable from '../../components/preview-table/PreviewTable';
import TextField from "@material-ui/core/TextField";
import { Form, InputInstruction } from "./CountriesStyle";
import ScrollTopWrapper from '../../components/scroll-top-wrapper/ScrollTopWrapper';

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
        <ScrollTopWrapper>
          <Form>
            <TextField
              id="outlined-search"
              label="Search"
              type="search"
              variant="outlined"
              onChange={filterCountries}
            />
            <InputInstruction>חיפוש המדינות באנגלית בלבד</InputInstruction>
          </Form>

          <PreviewTable countriesData={filteredCountries} />
        </ScrollTopWrapper>
      </>
    );
}

export default Countries;