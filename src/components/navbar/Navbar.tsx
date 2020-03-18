import React, { useEffect } from 'react';
import { BottomNavbar, NavigationAction } from './NavbarStyle';
import { Flag, Language } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const Navbar = () => {
    let currentPageNumber = 0;
    const history = useHistory();

    // Check which page I'm currently in
    if (history.location.pathname.includes('countries')) {
      currentPageNumber = 1;
    }

    const [value, setValue] = React.useState(currentPageNumber);
    

    useEffect(() => {
        switch (value) {
          case 0:
            history.push('/');
            break;
          case 1:
            history.push('/countries');
            break;
        }
    }, [value, history]);

    return (
      <BottomNavbar
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <NavigationAction label="מידע עולמי" icon={<Language />} />
        <NavigationAction label="מדינות" icon={<Flag />} />
      </BottomNavbar>
    );
}

export default Navbar;