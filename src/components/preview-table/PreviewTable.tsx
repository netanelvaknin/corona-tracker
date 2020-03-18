import React from 'react';
import Table from '@material-ui/core/Table';
import {
  TableHeadingCell,
  TableBodyCell,
  HeadingRow
} from "./PreviewTableStyle";
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface Country {
    country?: string;
    cases?: number;
    todayCases?: number;
    deaths?: number;
    todayDeaths?: number
    recovered?: number;
    critical?: number;
}

interface PreviewTableProps {
    countriesData: Country[];
}

const PreviewTable = (props: PreviewTableProps) => {
    const { countriesData } = props;

    return (
      <TableContainer>
        <Table>
          <TableHead>
            <HeadingRow>
              <TableHeadingCell>מדינה</TableHeadingCell>
              <TableHeadingCell>חולים</TableHeadingCell>
              <TableHeadingCell>מחלימים</TableHeadingCell>
              <TableHeadingCell>מקרי מוות</TableHeadingCell>
              <TableHeadingCell>מצב קשה</TableHeadingCell>
            </HeadingRow>
          </TableHead>

          <TableBody>
            {countriesData.map(country => {
              return (
                <TableRow key={country.country}>
                  <TableBodyCell>{country.country}</TableBodyCell>
                  <TableBodyCell>{country.cases}</TableBodyCell>
                  <TableBodyCell>{country.recovered}</TableBodyCell>
                  <TableBodyCell>{country.deaths}</TableBodyCell>
                  <TableBodyCell>{country.critical}</TableBodyCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default PreviewTable;