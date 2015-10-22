import React from 'react';
import './ProductComparator.less';
import { assign } from 'lodash-compat/object';
import { actions, stores, utils } from 'sdk';

@utils.connectToStores()
class ProductComparator extends React.Component {

  static getStores() {
    return [stores.SearchStore];
  }

  static getPropsFromStores(props) {
    let query = getSearch(props);
    let searchStore = stores.SearchStore.getState();
    let productsIds = searchStore.getIn([props.id, 'results'])
    productsIds = productsIds ? productsIds : searchStore.getIn([query, 'results']);
    let products = productsIds ? stores.ProductStore.getProducts(productsIds) : null;

    return {
      products: products
    };
  }

  static getSearch(props) {
    let category = this.chooseMostEspecificCategory(props.categories);

    return Immutable.Map({
      category: category,
      pageSize: props.settings.get('quantity')
    });
  }

  requestSearch(props) {
    if (!props.settings) {
      return;
    }

    if (!props.products) {
      let search = getSearch(props);
      let alreadyRequested = stores.SearchStore.getState().getIn([search, 'loading']);
      if (!alreadyRequested) {
        actions.SearchActions.requestSearch(search);
      }
    }
  }

  componentWillMount() {
    this.requestSearch(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.requestSearch(nextProps);
  }

  chooseMostEspecificCategory(categories) {
    if (categories.length == 0){
      return undefined;
    }

    if (categories.length == 1){
      return categories[0];
    }

    let category = categories[0];

    let countChilds = function(category){
      return (category.slug.match(/\//g) || []).length;
    };

    for (var i = 1; i < categories.length; i++) {
      if (countChilds(categories[i]) > countChilds(categories[i-1])){
        category = categories[i];
      }
    }

    return category;
  }

  render() {
    let category = this.chooseMostEspecificCategory(props.categories);
    let properties = assign(this.props.properties, this.props.sku.properties);
    console.log(properties);
    console.log('products', this.props.products);

    return (
      <div className="product-comparator">
        <h3>Compare produtos da categoria "{category.name}"</h3>
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
