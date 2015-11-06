import React from 'react';
import './style.less';
import SVGIcon from 'commons/components/SVGIcon';
import instagramIcon from 'assets/icons/instagram.svg';
import facebookIcon from 'assets/icons/facebook.svg';
import pinterestIcon from 'assets/icons/pinterest.svg';

class Footer extends React.Component {
  render() {
    return (
      <div className="v-footer clearfix">
        <div className="col-xs-10">
          <ul className="v-footer__menu">
            <li><a href="#" className="v-footer__menu-link">Categorias</a></li>
            <li><a href="#" className="v-footer__menu-link">FAQ</a></li>
            <li><a href="#" className="v-footer__menu-link">Sobre</a></li>
            <li><a href="#" className="v-footer__menu-link">Termos de uso</a></li>
          </ul>
          <div className="v-footer__address">
            <p>Praia de Botafogo, 518, Sobreloja, Botafogo. Rio de Janeiro, RJ - 22250-040</p>
          </div>
        </div>

        <div className="v-footer__social-icons col-xs-2">
          <SVGIcon className="v-footer__instagram" svg={instagramIcon} width={33} height={33} fill="#FFFFFF"/>
          <SVGIcon className="v-footer__facebook" svg={facebookIcon} width={33} height={33} fill="#FFFFFF"/>
          <SVGIcon className="v-footer__pinterest" svg={pinterestIcon} width={33} height={33} fill="#FFFFFF"/>
        </div>
      </div>
    );
  }
}

export default Footer;
