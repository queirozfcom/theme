import React from 'react';
import VariationButton from './VariationButton';

class SelectVariation extends React.Component {
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

    let getSkuGroups = function(skus, facet = 0) {
      let grupo = {};

      each(skus, function(sku) {
        let chave = sku.properties[facet].facet.values[0];

        try {
          grupo[chave].push(sku);
        } catch(error) {
          grupo[chave] = [sku];
        }
      });

      return grupo;
    };

    console.log(getSkuGroups(this.props.skus));
    console.log(getSkuGroups(getSkuGroups(this.props.skus).PP, 1));

    let groups = getSkuGroups(this.props.skus);
    return (
      <div className="col-xs-12">
        <h3 className="v-dream__selector__title col-xs-11">Selecione o {this.props.variation}:</h3>
        <div className="v-dream__size-selector__wrapper col-xs-11">
        {Object.keys(groups).map(function(group) {
          return (
            <div key={group}>
              <VariationButton skus={groups[group]} value={group} getSkuGroups={getSkuGroups} />
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}

export default SelectVariation;
