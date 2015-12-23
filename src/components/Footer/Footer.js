import React from 'react';
import { stores, connectToStores } from 'sdk';
import './Footer.less';
import SVGIcon from 'utils/SVGIcon';
import instagramIcon from 'assets/icons/instagram.svg';
import facebookIcon from 'assets/icons/facebook.svg';
import pinterestIcon from 'assets/icons/pinterest.svg';
import Categories from './Categories';
//import { map } from 'lodash';

@connectToStores()
class Footer extends React.Component {

  static getStores() {
    return [
      stores.CategoryStore
    ];
  }

  static getPropsFromStores() {
    return {
      categories: stores.CategoryStore.getState()
    };
  }

  render() {
    let items = this.props.categories.map((category) => {
      console.log(category);
      return (
        <Categories cat={category} />
      );
    });

    return (
      <div className="Footer clearfix">
        <div className="Footer__wrap">
          <div className="Footer__social-icons">
            <button className="Footer__button"><a href="https://www.instagram.com/lojapilateslovers/"><SVGIcon svg={instagramIcon} width={33} height={33} fill="#703693"/></a></button>
            <button className="Footer__button"><a href="https://www.facebook.com/LojaPilatesLovers"><SVGIcon svg={facebookIcon} width={33} height={33} fill="#703693"/></a></button>
          </div>
          <div className="Footer__links">
            <ul className="Footer__menu">
              {items}
            </ul>
            <span className="Footer__address">Praia de Botafogo, 518, Sobreloja, Botafogo. Rio de Janeiro, RJ - 22250-040</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
