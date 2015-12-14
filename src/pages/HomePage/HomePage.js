import React from 'react';
import { actions, stores, Area } from 'sdk';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Newsletter from 'components/Newsletter/Newsletter';
import Policies from 'components/Policies/Policies';
import './HomePage.less';

import { connect } from 'react-redux';
import { redux } from 'sdk';

@connect((state) => {
  const currentURL = window.location.pathname + window.location.search;

  return {
    pageResources: state.SDK.resource.get(currentURL)
  };
})
class HomePage extends React.Component {
  componentWillMount() {
    const currentURL = window.location.pathname + window.location.search;

    if (!this.props.pageResources) {
      this.props.dispatch(redux.actionCreators.resource.getAreaResources({currentURL, id: 'home'}));
    }
  }

  render() {
    return (
      <div>
        <Header areaPath="home" />
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
