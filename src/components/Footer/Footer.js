import React from 'react';
import './Footer.less';
import SVGIcon from 'utils/SVGIcon';
import instagramIcon from 'assets/icons/instagram.svg';
import facebookIcon from 'assets/icons/facebook.svg';
import pinterestIcon from 'assets/icons/pinterest.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer clearfix">
        <div className="col-xs-10">
          <ul className="Footer__menu">
            <li className="Footer__item"><a href="#" className="Footer__menu-link">Categorias</a></li>
            <li className="Footer__item"><a href="#" className="Footer__menu-link">FAQ</a></li>
            <li className="Footer__item"><a href="#" className="Footer__menu-link">Sobre</a></li>
            <li className="Footer__item"><a href="#" className="Footer__menu-link">Termos de uso</a></li>
          </ul>
          <span className="Footer__address">Praia de Botafogo, 518, Sobreloja, Botafogo. Rio de Janeiro, RJ - 22250-040</span>
        </div>

        <div className="Footer__social-icons col-xs-2">
          <SVGIcon className="Footer__icon" svg={instagramIcon} width={33} height={33} fill="#FFFFFF"/>
          <SVGIcon className="Footer__icon" svg={facebookIcon} width={33} height={33} fill="#FFFFFF"/>
          <SVGIcon className="Footer__icon" svg={pinterestIcon} width={33} height={33} fill="#FFFFFF"/>
        </div>
      </div>
    );
  }
}

export default Footer;
