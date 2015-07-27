import React from 'react';
import { connectToStores, dispatcher } from 'sdk';
import { State } from 'react-router';
import Facet from './Facet';
import { IntlMixin } from 'react-intl';

const stores = [
  dispatcher.stores.SearchStore,
  dispatcher.stores.ShopStore
];

let Facets = React.createClass({
  mixins: [ State, IntlMixin ],

  render() {
    let facets = this.props.search.facets || {};
    let cleanFacets = [];

    if (facets.categories || facets.filters || facets.brands) {
      cleanFacets = facets.categories.map((facet) => {
        return {
          heading: facet.name,
          options: facet.children,
          type: 'category'
        };
      });

      cleanFacets.concat(facets.filters.map((facet) => {
        return {
          heading: facet.key,
          options: facet.value,
          type: 'specification'
        };
      }));

      cleanFacets.push({
        heading: this.getIntlMessage('brands'),
        options: facets.brands,
        type: 'brand'
      });
    }

    return (
      <div className='ds-facets'>
        { cleanFacets.map((facet) =>
          <Facet facet={facet} key={facet.heading} route={this.props.route}/>
        )}
      </div>
    );
  }
});

export default connectToStores(stores)(Facets);
