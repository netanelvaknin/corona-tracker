import styled from 'styled-components/macro';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export const TableHeadingCell = styled(TableCell)`
         color: ${props => props.theme.palette.primary.main};
         text-align: center;
         font-size: 2.2rem;
         font-weight: bold;

         @media (max-width: 960px) {
           padding: 0.8rem;
           width: 5rem;
         }

         @media (max-width: 767px) {
           font-size: 1.8rem;
         }

         @media (max-width: 360px) {
             font-size: 1.5rem;
         }
       `;

export const TableBodyCell = styled(TableCell)`
         text-align: center;
         font-size: 1.9rem;

         @media (max-width: 960px) {
           padding: 0.8rem;
         }

         @media (max-width: 767px) {
           font-size: 1.5rem;
         }

         @media (max-width: 360px) {
           font-size: 1.3rem;
         }
       `;

export const HeadingRow = styled(TableRow)`
    background: ${props => props.theme.palette.primary.dark};
    
`;