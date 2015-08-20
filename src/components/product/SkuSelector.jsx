import React from 'react';
import 'styles/components/product/SkuSelector.less';

let mock = {
  name: 'Short Balneário',
  skus: [
    {
      id: 111,
      size: 'PP',
      availability: 100
    },
    {
      id: 222,
      size: 'P',
      availability: 0
    },
    {
      id: 333,
      size: 'M',
      availability: 203
    },
    {
      id: 444,
      size: 'G',
      availability: 2
    }
  ]
};

class SkuSelector extends React.Component {
  changeAvailability(availability) {
    if (availability > 0) {
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }

  checkVariations(skus) {
    if (skus.length <= 1) {
      return <div></div>;
    }
    return (
      <div className="row v-dream__selector-section--highlight">
        <div className="row v-dream__selector-row">
          <h3 className="v-dream__selector__title col-xs-11 col-xs-offset-1">Selecione o tamanho:</h3>
          <div>
            {mock.skus.map( (sku, index) => {
              if (index === 0) {
                return (
                  <button key={sku.id} className={ this.changeAvailability(sku.availability) + ' col-xs-offset-1 col-xs-2'}>
                    { sku.size }
                  </button> );
              }
              return (
                <button key={sku.id} className={ this.changeAvailability(sku.availability) + ' col-xs-2'}>
                  { sku.size }
                </button> );
            }
            )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.checkVariations(mock.skus) }
      </div>
    );
  }
}

export default SkuSelector;
