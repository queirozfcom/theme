import storefront from 'storefront';
import React from 'react';
import { connectToStores, dispatcher } from 'sdk';
import Shelf from '../components/search/Shelf';
import { PureRenderMixin } from 'react/lib/ReactComponentWithPureRenderMixin';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

let config1 = {
  title: 'All',
  search: {
    id: 'home-shelf-1'
  }
};

const stores = [
  dispatcher.stores.SearchStore,
  dispatcher.stores.ShopStore,
  dispatcher.stores.ComponentStore
];

let Home = React.createClass({
  mixins: [ PureRenderMixin ],

  componentDidMount() {
    const accountName = this.props.ShopStore.get('accountName');

    const search1 = this.props.SearchStore.get(config1.search.id);
    if (!search1 || !search1.results) {
      config1.search.accountName = accountName;
      dispatcher.actions.SearchActions.requestSearch(config1.search);
    }
  },

  render() {
    let banner;
    let Banner = this.props.ComponentStore.getIn(['Banner', 'constructor']);
    if (Banner) {
      banner = <Banner id="home-shelf-1" route="home"/>;
    }

    return (
      <div className="page-home">
        <Header/>
        <div className="container-fluid">
          {banner}
          <Shelf {...config1} />
        </div>
        <Footer />
      </div>
    );
  }
});

export default connectToStores(stores)(Home);
