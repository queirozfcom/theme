import { connectToStores, dispatcher } from 'sdk';
import React from 'react';
import Banner from 'components/banner/Banner';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import Newsletter from 'components/newsletter/Newsletter';
import Policies from 'components/policies/Policies';
import Shelf from 'components/shelf/Shelf';
import style from 'styles/pages/HomePage.less'; // eslint-disable-line

let destaques = [
  {
    name: 'Body de lycra',
    price: 'R$149,80',
    image: 'http://i.imgur.com/Q2TDtMp.png'
  },
  {
    name: 'Camiseta regata',
    price: 'R$79,00',
    image: 'http://i.imgur.com/Vprm8x2.png'
  }
];

let promocoes = [
  {
    name: 'Camiseta regata',
    price: 'R$79,00',
    image: 'http://i.imgur.com/Vprm8x2.png'
  }
];

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
        <Shelf title="Destaques" products={destaques}/>
        <Shelf title="Promoções" products={promocoes}/>
        <Policies/>
        <Newsletter/>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
