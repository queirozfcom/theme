import React from 'react';
import { actions, stores } from 'sdk';
import Header from 'components/Header';
import Policies from 'components/Policies/Policies';
import './HomePage.less';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

const Area = stores.ComponentStore.state.getIn(['Area@vtex.storefront-sdk', 'constructor']);

class HomePage extends React.Component {
  componentWillMount() {
    let currentURL = (window.location.pathname + window.location.search);
    if (!stores.ResourceStore.getState().get(currentURL)) {
      actions.AreaActions.getAreaResources({currentURL, id: 'home'});
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div key="HomePage" className="HomePage">
          <Header areaPath="home" />
          <div className="HomePage__wrapper">
            <div className="HomePage__bannerarea">
              <Area id="home/banner"/>
            </div>
            <div className="HomePage__shelfarea">
              <Area id="home/shelf1"/>
            </div>
            <Policies/>
          </div>
          <Area id="home/footer"/>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default HomePage;
