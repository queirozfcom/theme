import React from 'react';
import './ProductComparator.less';

class ProductComparator extends React.Component {
  render() {
    return (
      <div className="product-comparator">
        <h3>Compare produtos semelhantes</h3>
        <div className="product-comparator-table-container">
          <table className="table">
            <thead>
              <tr>
                <td className="clear-td"></td>
                <td className="product-comparator-name">
                  <img className="product-comparator-image" src="http://www.case-custom.com/media/catalog/product/cache/1/image/500x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone6-clear-silicone-case-slim-tough.jpg" />
                  <strong>iPhone 6</strong>
                </td>

                <td className="product-comparator-name">
                  <img className="product-comparator-image" src="http://www.case-custom.com/media/catalog/product/cache/1/image/500x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone6-clear-silicone-case-slim-tough.jpg" />
                  <strong>iPhone 5s</strong>
                </td>

                <td className="product-comparator-name">
                  <img className="product-comparator-image" src="http://www.case-custom.com/media/catalog/product/cache/1/image/500x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone6-clear-silicone-case-slim-tough.jpg" />
                  <strong>iPhone 5</strong>
                </td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td className="clear-td"></td>
                <td><button className="btn btn-xs btn-success">Adicionar ao carrinho</button></td>
                <td><button className="btn btn-xs btn-success">Adicionar ao carrinho</button></td>
                <td><button className="btn btn-xs btn-success">Adicionar ao carrinho</button></td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td className="active">
                  <strong>Preço</strong>
                </td>
                <td>
                  R$ 3.300,00
                </td>
                <td>
                  R$ 2.300,00
                </td>
                <td>
                  R$ 1.300,00
                </td>
              </tr>

              <tr>
                <td className="active">
                  <strong>Memória</strong>
                </td>
                <td>
                  32gb
                </td>
                <td>
                  16gb
                </td>
                <td>
                  16gb
                </td>
              </tr>

              <tr>
                <td className="active">
                  <strong>Câmera</strong>
                </td>
                <td>
                  12mp
                </td>
                <td>
                  8mp
                </td>
                <td>
                  8mp
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductComparator;
