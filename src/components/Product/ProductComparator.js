import React from 'react';
import './ProductComparator.less';

class ProductComparator extends React.Component {
  render() {
    return (
      <div className="product-comparator">
        <h3>Compare produtos semelhantes</h3>
        <div className="product-comparator-table-container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <td></td>
                <td>iPhone 6</td>
                <td>iPhone 5s</td>
                <td>iPhone 5</td>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td></td>
                <td><button className="btn btn-xs btn-primary">Adicionar ao carrinho</button></td>
                <td><button className="btn btn-xs btn-primary">Adicionar ao carrinho</button></td>
                <td><button className="btn btn-xs btn-primary">Adicionar ao carrinho</button></td>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td className="">
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
                <td>
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
                <td>
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
