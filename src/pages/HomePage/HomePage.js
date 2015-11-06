import React from 'react';
import { actions, stores, utils } from 'sdk';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import Policies from 'components/Policies/Policies';
import './HomePage.less';

@utils.connectToStores()
class HomePage extends React.Component {
  static getStores() {
    return [stores.ComponentStore];
  }

  static getPropsFromStores() {
    return {
      banner: stores.ComponentStore.getState().getIn(['Banner@vtex.storefront-banner']),
      shelf: stores.ComponentStore.getState().getIn(['Shelf@vtex.storefront-shelf'])
    }
  }

  componentWillMount() {
    let currentURL = (window.location.pathname + window.location.search);
    if (!stores.ResourceStore.getState().get(currentURL)) {
      actions.ResourceActions.getRouteResources(currentURL, 'home');
    }
  }

  render() {
    let Banner = this.props.banner ? this.props.banner.get('constructor') : null;
    let Shelf = this.props.shelf ? this.props.shelf.get('constructor') : null;

    return (
      <div>
        <Header/>
        {Banner ? <Banner id="home-banner" route="home"/> : null}
        {Shelf ? <Shelf id="home-shelf-1" route="home"/> : null}
        {Shelf ? <Shelf id="home-shelf-2" route="home"/> : null}
        <Policies/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
