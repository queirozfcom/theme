import React from 'react';
import VariationButton from './VariationButton';

class SelectVariation extends React.Component {
  getVariationKey(variationName) {
    if(variationName === 'Tamanho') {
      return ['PP','P','M', 'G', 'GG'];
    } else if (variationName === 'Cor'){
      return ['Branco', 'Azul'];
    }
  }

  changeAvailability(availability) {
    if (availability > 0) {
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }

  render() {
    // if (this.props.skus.length <= 1) {
    //   return null;
    // }
    let variationName = this.props.skuVariations.name;
    let skus = this.props.skus;
    let variationKey = this.getVariationKey(variationName);
    return (
      <div className="col-xs-12">
        <h3 className="v-dream__selector__title col-xs-11">{variationName}:</h3>
        <div className="v-dream__size-selector__wrapper col-xs-11">
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
                                     facets={this.props.facets} addFacet={this.props.addFacet} isActive={isActive}
                                     variationName={variationName} changeAvailability={this.props.changeAvailability}/>
                  </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default SelectVariation;
