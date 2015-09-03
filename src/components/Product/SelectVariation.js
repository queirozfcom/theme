import React from 'react';
import VariationButton from './VariationButton';

class SelectVariation extends React.Component {
  getVariationKey(i) {
      let sortOrder = ['PP','P','M', 'G', 'GG'];
      return sortOrder[i];
  }

  changeAvailability(availability) {
    if (availability > 0) {
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }

  render() {
    if (this.props.skus.length <= 1) {
      return null;
    }
    let i=0;
    let variations = this.props.skuVariation;
    let skus = this.props.skus;
    return (
      <div className="col-xs-12">
        <h3 className="v-dream__selector__title col-xs-11">{this.props.variationName}:</h3>
        <div className="v-dream__size-selector__wrapper col-xs-11">
          {
            Object.keys(variations).map((variation) => {
              let isActive = false;
              let variationKey = this.getVariationKey(i);
              if (variationKey === this.props.selectedVariation) {
                isActive = true;
              }
              i++;
                return (
                  <div key={variationKey}>
                    <VariationButton skus={skus} value={variationKey} changeVariationState={this.props.changeVariationState}
                                                 addFacet={this.props.addFacet} variationName={this.props.variationName} changeAvailability={this.props.changeAvailability} isActive={isActive}/>
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
