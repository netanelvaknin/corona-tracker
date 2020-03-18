import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { AppWrapper } from './AppStyle';

// Pages
import Global from './pages/global/Global';
import Countries from './pages/countries/Countries';

const CoronaTrackerRoutes = [
  { path: "/", component: <Global /> },
  { path: "/countries", component: <Countries /> },
];

const App = () => {
  return (
    <AppWrapper>
      <Navbar />

      <Switch>
        {CoronaTrackerRoutes.map(route => {
          return (
            <Route key={route.path} exact path={route.path}>
              {route.component}
            </Route>
          );
        })}
      </Switch>
    </AppWrapper>
  );
}

export default App;
