import React from 'react';
import { actions, stores } from 'sdk';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import Policies from 'components/Policies/Policies';
import Banner from 'react-proxy?name=Banner!components/Banner/Banner';
import Shelf from 'react-proxy?name=Shelf!components/Shelf/Shelf';
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
        <Banner id="home-banner" route="home"/>
        <Shelf id="home-shelf-1" route="home"/>
        <Shelf id="home-shelf-2" route="home"/>
        <Policies/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;

let components = [
  HomePage,
  Banner,
  Shelf
];

actions.ComponentActions.register(components);

// Enable react hot loading with external React
// see https://github.com/gaearon/react-hot-loader/tree/master/docs#usage-with-external-react
if (module.hot) {
  window.RootInstanceProvider = require('react-hot-loader/Injection').RootInstanceProvider;
}
