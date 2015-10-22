import React from 'react';
import './ProductComparator.less';
import { assign, keys } from 'lodash-compat/object';
import { clone } from 'lodash-compat/lang';
import { uniq } from 'lodash-compat/array';
import { forEach, pluck } from 'lodash-compat/collection';
import { actions, stores, utils } from 'sdk';
import ComparatorHeader from './ComparatorHeader';
import ComparatorFooter from './ComparatorFooter';


let chooseMostEspecificCategory = (categories) => {
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

let getSearch = (props) => {
  let category = chooseMostEspecificCategory(props.product.categories);

  return Immutable.Map({
    category: category.slug,
    pageSize: props.settings.quantity
  });
}

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

  render() {
    let category = chooseMostEspecificCategory(this.props.product.categories);
    let products = clone(this.props.products);
    if (products){
      products.unshift(this.props.product);
      products = uniq(products, 'slug');
    }

    let comparation = {};
    forEach(keys(this.props.product), function(key){
      comparation[key] = pluck(products, key);
    });

    console.log(comparation);
    //let properties = assign(this.props.properties, this.props.sku.properties);

    return (
      <div className="product-comparator">
        <h3>Compare produtos da categoria "{category.name}"</h3>
        <div className="product-comparator-table-container">
          <table className="table">
            <thead>
              <ComparatorHeader products={products} />
            </thead>
            <tfoot>
              <ComparatorFooter products={products} />
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
