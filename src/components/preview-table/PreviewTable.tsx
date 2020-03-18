import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
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
                    <TableRow>
                        <TableCell>מדינה</TableCell>
                        <TableCell>חולים</TableCell>
                        <TableCell>חולים מהיממה האחרונה</TableCell>
                        <TableCell>מחלימים</TableCell>
                        <TableCell>מקרי מוות</TableCell>
                        <TableCell>מקרי מוות מהיממה האחרונה</TableCell>
                        <TableCell>מצב קשה</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                        {countriesData.map(country => {
                            return (
                                <TableRow key={country.country}>
                                    <TableCell>{country.country}</TableCell>
                                    <TableCell>{country.cases}</TableCell>
                                    <TableCell>{country.todayCases}</TableCell>
                                    <TableCell>{country.recovered}</TableCell>
                                    <TableCell>{country.deaths}</TableCell>
                                    <TableCell>{country.todayDeaths}</TableCell>
                                    <TableCell>{country.critical}</TableCell>
                                </TableRow>
                            )
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PreviewTable;