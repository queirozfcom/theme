import React from 'react';
import { actions, stores, Area } from 'sdk';
import Header from 'commons/components/Header';
import Footer from 'commons/components/Footer';
import Newsletter from 'commons/components/Newsletter';
import Policies from './Policies';
import './style.less';

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
        <Area id="home/banner" />
        <Area id="home/shelf-2" />
        <Area id="home/shelf-1" />
        <Policies/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;

actions.ComponentActions.register({
  name: 'HomePage@vtex.storefront-theme',
  constructor: HomePage
});
