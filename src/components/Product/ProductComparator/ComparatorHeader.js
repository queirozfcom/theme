import React from 'react';
import Img from 'utils/Img';

class ComparatorHeader extends React.Component {
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
              <td className="product-comparator-name">
                <a href={ `/${product.slug}/p` }>
                  <Img className="product-comparator-image" src={ product.skus[0].images[0].src } width={175} height={175}/>
                  <strong>{ product.name }</strong>
                </a>
              </td>
            );
          })
        }
      </tr>
    );
  }
}

export default ComparatorHeader;
