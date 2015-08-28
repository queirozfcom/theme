import React from 'react';
import { dispatcher } from 'sdk';
import Banner from 'components/banner/Banner';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Newsletter from 'components/newsletter/Newsletter';
import Policies from 'components/policies/Policies';
import Shelf from 'components/shelf/Shelf';
import 'styles/pages/HomePage.less';

class HomePage extends React.Component {
  componentWillMount() {
    let currentURL = (window.location.pathname + window.location.search);
    if (!dispatcher.stores.ResourceStore.getState().get(currentURL)) {
      dispatcher.actions.ResourceActions.getRouteResources(currentURL, 'home');
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
