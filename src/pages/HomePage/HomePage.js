import React from 'react';
import { actions, stores, utils, Area } from 'sdk';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import Policies from 'components/Policies/Policies';
import './HomePage.less';

class HomePage extends React.Component {
  componentWillMount() {
    let currentURL = (window.location.pathname + window.location.search);
    if (!stores.ResourceStore.getState().get(currentURL)) {
      actions.ResourceActions.getRouteResources(currentURL, 'home');
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Area id="home/banner"/>
        <Area id="home/shelf1"/>
        <Policies/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
