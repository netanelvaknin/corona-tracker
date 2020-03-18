import styled from 'styled-components/macro';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export const BottomNavbar = styled(BottomNavigation)`
    background: ${props => props.theme.palette.secondary.dark};
`;

export const NavigationAction = styled(BottomNavigationAction)`
    color: ${props => props.theme.palette.primary.light};
`;