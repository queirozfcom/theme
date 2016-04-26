import React from 'react';
import { stores, connectToStores } from 'sdk';
import './Footer.less';
import instagramIcon from 'assets/icons/instagram.svg';
import facebookIcon from 'assets/icons/facebook.svg';
import Categories from './Categories';

const Link = stores.ComponentStore.getState().getIn(['Link@vtex.storefront-sdk', 'constructor']);
const SVGIcon = stores.ComponentStore.state.getIn(['SVGIcon@pilateslovers.pilateslovers-theme', 'constructor']);

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
    let items = this.props.categories.valueSeq().map((category) => {
      return (
        <Categories key={category.get('slug')} cat={category} />
      );
    });

    return (
      <div className="Footer clearfix">
        <div className="Footer__wrap">
          <div className="Footer__social-icons col-md-2">
            <button className="Footer__button">
              <a href="https://www.instagram.com/lojapilateslovers/">
                <SVGIcon svg={instagramIcon} width={33} height={33} fill="#703693"/>
              </a>
            </button>
            <button className="Footer__button">
              <a href="https://www.facebook.com/LojaPilatesLovers">
                <SVGIcon svg={facebookIcon} width={33} height={33} fill="#703693"/>
              </a>
            </button>
          </div>

          <div className="Footer__links col-md-10">
            <ul className="Footer__menu col-md-3">
              <div className="Footer__links_title">
                <h4 className="hidden-xs hidden-sm">CATEGORIAS</h4>
              </div>
              { items }
            </ul>

            <ul className="Footer__menu institucional col-md-3">
              <div className="Footer__links_title">
                <h4 className="hidden-xs hidden-sm">CONTEÚDO</h4>
              </div>

              <li><Link to={`/quem-somos`}>
                Quem Somos
              </Link></li>
              <li><Link to={`/politica-de-troca-e-devolucao`}>
                Política de troca e devolução
              </Link></li>
            </ul>

            <div className="Footer__contacts Footer__menu col-md-3">
              <div className="Footer__links_title">
                <h4 className="hidden-xs hidden-sm">CONTATO</h4>
              </div>
              Telefone: (21) 3593-4758<br/>
              loja@pilateslovers.com.br
            </div>

            <div className="Footer__payments Footer__menu col-md-3">
              <div className="Footer__links_title">
                <h4 className="hidden-xs hidden-sm">PAGUE COM</h4>
              </div>
              <ul className="Footer__payments-flags">
                <li><i className="payment-icon amex" title="amex"></i></li>
                <li><i className="payment-icon diners" title="diners"></i></li>
                <li><i className="payment-icon elo" title="elo"></i></li>
                <li><i className="payment-icon hipercard" title="hipercard"></i></li>
                <li><i className="payment-icon mastercard" title="mastercard"></i></li>
                <li><i className="payment-icon visa" title="visa"></i></li>
                <li><i className="payment-icon boleto" title="boleto"></i></li>
                <li><i className="payment-icon banco-do-brasil" title="banco-do-brasil"></i></li>
                <li><i className="payment-icon banco-itau" title="banco-itau"></i></li>
                <li><i className="payment-icon bradesco" title="bradesco"></i></li>
              </ul>
            </div>
          </div>

          <div className="Footer__address col-xs-12 col-md-12">
            Daniela Soria Texeira - CNPJ: 20.865.869/0001-06<br/>
            Todos os direitos reservados. 2016
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
