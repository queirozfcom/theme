import React from 'react';
import { actions, stores } from 'sdk';
import './HomePage.less';
import Policies from 'components/Policies/Policies';

const Placeholder = stores.ComponentStore.state.getIn(['Placeholder@vtex.storefront-sdk', 'constructor']);

class HomePage extends React.Component {
  componentDidMount() {
    let currentURL = (window.location.pathname + window.location.search);
    if (!stores.ResourceStore.getState().get(currentURL)) {
      actions.AreaActions.getAreaResources({currentURL, id: 'home'});
    }
  }

  render() {
    return (
      <div className="HomePage">
        <div className="HomePage__wrapper">
          <div className="HomePage__bannerarea">
            <Placeholder id="banner"/>
          </div>
          <div className="HomePage__shelfarea">
            <Placeholder id="shelf"/>
          </div>
        </div>
        <Policies />
      </div>
    );
  }
}

export default HomePage;
