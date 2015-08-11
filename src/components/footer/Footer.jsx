import React from 'react';
import style from 'styles/components/footer/Footer.less'; // eslint-disable-line

class Footer extends React.Component {
  render() {
    return (
      <div className="v-footer clearfix">
        <div className="col-xs-10">
          <div className="v-footer__menu">
            <p>Categorias</p>
            <p>FAQ</p>
            <p>Sobre</p>
            <p>Termos de uso</p>
          </div>
          <div className="v-footer__address">
            <p>Praia de Botafogo, 518, Sobreloja, Botafogo. Rio de Janeiro, RJ - 22250-040</p>
          </div>
        </div>

        <div className="v-footer__social-icons col-xs-2">
          <div className="v-icon v-icon__instagram"></div>
          <div className="v-icon v-icon__facebook"></div>
          <div className="v-icon v-icon__pinterest"></div>
        </div>
      </div>
    );
  }
}

export default Footer;
