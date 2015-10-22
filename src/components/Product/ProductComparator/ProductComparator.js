import React from 'react';
import './ProductComparator.less';
import { keys } from 'lodash-compat/object';
import { clone } from 'lodash-compat/lang';
import { uniq } from 'lodash-compat/array';
import { forEach, pluck } from 'lodash-compat/collection';
import { actions, stores, utils } from 'sdk';
import ComparatorHeader from './ComparatorHeader';
import ComparatorFooter from './ComparatorFooter';
import ProductComparatorRow from './ProductComparatorRow';
import Loader from '../../Loader/Loader';

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

  getComparationRows(products){
    let comparation = {};
    forEach(keys(this.props.product), function(key){
      comparation[key] = pluck(products, key);
    });

    let propertiesNames = pluck(pluck(comparation.properties[0], 'facet'), 'name');
    let properties = {};

    // Hackathon legacy for storefront team. 😘
    forEach(propertiesNames, function(propertyName){
      forEach(comparation.properties, function(productProperties){
        forEach(productProperties, function(property){
          if (property.facet.name == propertyName){
            if (!properties[propertyName]){
              properties[propertyName] = [];
            }
            properties[propertyName].push(property.facet.values[0]);
          }
        });
      });
    });

    let comparationRows = [];

    let prices = []
    forEach(comparation.skus, function(productsSkus){
      prices.push(`R$ ${productsSkus[0].offers[0].price},00`);
    });
    comparationRows.push(
      <ProductComparatorRow title='Preço' values={prices} />
    );

    forEach(properties, function(values, key){
      comparationRows.push(
        <ProductComparatorRow title={key} values={values} />
      );
    });

    return comparationRows;
  }

  render() {
    if (!this.props.products){
      return (<Loader />);
    }

    let category = chooseMostEspecificCategory(this.props.product.categories);
    let products = clone(this.props.products);
    if (products){
      products.unshift(this.props.product);
      products = uniq(products, 'slug');
    }

    var comparationRows = this.getComparationRows(products);

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
              {comparationRows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductComparator;
