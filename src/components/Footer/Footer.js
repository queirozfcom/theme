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
          <div className="Footer__social-icons">
            <button className="Footer__button"><a href="https://www.instagram.com/lojapilateslovers/"><SVGIcon svg={instagramIcon} width={33} height={33} fill="#703693"/></a></button>
            <button className="Footer__button"><a href="https://www.facebook.com/LojaPilatesLovers"><SVGIcon svg={facebookIcon} width={33} height={33} fill="#703693"/></a></button>
          </div>
          <div className="Footer__links">
            <ul className="Footer__menu">
              { items }
            </ul>
            <ul className="Footer__menu institucional">
              <li><Link to={`/quem-somos`}>
                Quem Somos
              </Link></li>
              <li><Link to={`/politica-de-troca-e-devolucao`}>
                Política de troca e devolução
              </Link></li>
            </ul>
            <div className="Footer__contacts">
              Telefone: (21) 3593-4758<br/>
              loja@pilateslovers.com.br
            </div>
            <span className="Footer__address">
              Daniela Soria Texeira - CNPJ: 20.865.869/0001-06<br/>
              Todos os direitos reservados. 2015
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
