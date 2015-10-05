import React from 'react';
import VariationButton from './VariationButton';
import { storefront } from 'sdk';

@storefront({
  name: 'SelectVariation@vtex.storefront-theme',
  title: 'VariationSelector',
  editable: true
})
class SelectVariation extends React.Component {

  render() {
    let variationName = this.props.skuVariations.name;
    let skus = this.props.skus;
    let variationKey = this.props.skuVariations.values;

    if (this.props.settings) {
       variationKey = this.props.settings.get('variationKey');
    }
    return (
      <div className="v-dream__selector-row row" key={variationName}>
        <div className="col-xs-12">
          <h3 className="v-dream__selector__title col-xs-12">{variationName}:</h3>
          <div className="v-dream__size-selector__wrapper col-xs-12">
            {
              variationKey.map((variation) => {
                let isActive = false;
                this.props.facets.forEach(function(facet) {
                  if(facet.value === variation) {
                    isActive = true;
                  }
                })

                  return (
                    <div key={variation}>
                      <VariationButton skus={skus} value={variation} removeFacet={this.props.removeFacet} getAvailability={this.props.getAvailability}
                                       facets={this.props.facets} addFacet={this.props.addFacet} isActive={isActive} getImg={this.props.getImg}
                                       variationName={variationName} changeAvailability={this.props.changeAvailability}/>
                    </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default SelectVariation;
