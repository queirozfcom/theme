import React from 'react';

class ComparatorFooter extends React.Component {
  render() {
    let products = this.props.products;

    if (!products) {
      return ( <tr><td colspan="4"></td></tr> )
    }

    return (
      <tr>
        <td className="clear-td"></td>
        {
          products.map((product) => {
            return (
              <td><a href={ `/checkout/cart/add?sku=${product.skus[0].id}&qty=1&seller=1` } className="btn btn-xs btn-success">Adicionar ao carrinho</a></td>
            );
          })
        }
      </tr>
    );
  }
}

export default ComparatorFooter;
