import { connectToStores, dispatcher } from 'sdk';
import React from 'react';
import Banner from 'components/banner/Banner';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Newsletter from 'components/newsletter/Newsletter';
import Policies from 'components/policies/Policies';
import Shelf from 'components/shelf/Shelf';
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
        <Banner/>
        <Shelf/>
        <Shelf/>
        <Policies/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
