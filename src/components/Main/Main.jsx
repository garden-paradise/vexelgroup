import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutContainer from './About/AboutContainer';
import AboutUs from './AboutUs/AboutUs';
import ArticleContainer from './Article/ArticleContainer';
import BusinessContainer from './Business/BusinessContainer';
import BusinesContainer from './BusinessArticle/BusinesContainer';
import Contacts from './Contacts/Contacts';
import EmployeeContainer from './Employee/EmployeeContainer';
import HomeContainer from './Home/HomeContainer';
import PressContainer from './Press/PressContainer';
import ReportContainer from './Report/ReportContainer';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/press/' component={PressContainer} />
        <Route exact path='/about/' component={AboutUs} />
        <Route exact path='/businesses/' component={BusinessContainer} />
        <Route
          exact
          path='/businesses/:category/:businessId/'
          component={BusinesContainer}
        />
        <Route exact path='/report/' component={ReportContainer} />
        <Route exact path='/employees/' component={AboutContainer} />
        <Route
          exact
          path='/employees/:employeeId/'
          component={EmployeeContainer}
        />
        <Route exact path='/press/:articleId/' component={ArticleContainer} />
        <Route exact path='/contacts/' component={Contacts} />
        <Redirect exact from='*' to='/' />
      </Switch>
    </main>
  );
};

export default Main;
