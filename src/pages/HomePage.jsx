import { connectToStores, dispatcher } from 'sdk';
import React from 'react';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import style from 'styles/pages/HomePage.less'; // eslint-disable-line

@connectToStores([
  dispatcher.stores.SearchStore,
  dispatcher.stores.ShopStore
])
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
