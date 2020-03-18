import styled from 'styled-components/macro';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export const BottomNavbar = styled(BottomNavigation)`
    background: ${props => props.theme.palette.primary.dark};
    margin-bottom: 5rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99;
`;

export const NavigationAction = styled(BottomNavigationAction)`
         color: ${props => props.theme.palette.primary.light};
         .MuiBottomNavigationAction-wrapper {
           svg {
             width: 3.2rem;
             height: 3.2rem;
           }
         }

         .MuiBottomNavigationAction-label {
           font-size: 1.9rem;
           margin-top: .7rem;
         }
       `;