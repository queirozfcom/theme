import Immutable from 'immutable';
import immutable from 'alt/utils/ImmutableUtil';
import { isArray } from 'lodash-compat/lang';
import { values } from 'lodash-compat/object';
import { flatten } from 'lodash-compat/array';
import {dispatcher} from 'sdk';

function addReviews(state, reviews) {
  if (!isArray(reviews)) {
    reviews = [reviews];
  }

  let newReviews = state.withMutations(map => {
    reviews.forEach( review => map.set(review.productId, review) );
  });

  return newReviews;
}

function getDataFromResources(state, resources) {
  let products = [];
  if (resources['review@vtex.review']) {
    products = values(resources['review@vtex.review']);
  }

  if (resources['review@vtex.review']) {
    products = products.concat(flatten(values(resources['review@vtex.review'])));
  }

  return addReviews(state, products);
}


@immutable
class ReviewStore {
  constructor(dispatcher) {
    this.state = getDataFromResources(Immutable.Map(), window.storefront.currentRoute.resources);

    this.exportPublicMethods({
      getReviews: this.getReviews
    });
  }

  getReviews(products) {
    if (!products) {
      return null;
    }

    let result = [];
    for (var i = 0; i < products.length; i++) {
      let product = this.state.get(products[i]);
      if (product) {
        result.push(product);
      }
    }

    return result;
  }

  onRequestProductSuccess(product) {
    this.setState(addReviews(this.state, product));
  }

  onRequestProductFail(error) {
    this.setState(this.state.set('error', error));
  }

  onRequestSearchSuccess({ products }) {
    this.setState(addReviews(this.state, products));
  }

  onGetRouteResourcesSuccess({ resources }) {
    this.setState(getDataFromResources(this.state, resources));
  }
}

if (!dispatcher.stores.ReviewStore){
  dispatcher.addStore('ReviewStore',ReviewStore,dispatcher)
}

export default dispatcher.stores.ReviewStore;
