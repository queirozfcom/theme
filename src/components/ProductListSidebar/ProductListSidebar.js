import React from 'react';
import './ProductListSidebar.less';

class ProductListSidebar extends React.Component {
  render() {
    return (
      <div className="ProductListSidebar">
        <h3 className="ProductListSidebar__title">Mais categorias</h3>
        <ul className="ProductListSidebar__list">
          <a className=""><li className="ProductListSidebar__list-option">Calças</li></a>
          <a className=""><li className="ProductListSidebar__list-option">Camisetas</li></a>
          <a className=""><li className="ProductListSidebar__list-option">Praia</li></a>
          <a className=""><li className="ProductListSidebar__list-option">Acessórios</li></a>
        </ul>
      </div>
    );
  }
}

export default ProductListSidebar;
