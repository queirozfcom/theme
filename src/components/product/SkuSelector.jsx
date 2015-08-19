import React from 'react';
import 'styles/components/product/SkuSelector.less';
class SkuSelector extends React.Component {
  changeAvailability(availability) {
    if (availability > 0) {
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }

  checkVariations(sku) {
    if (sku.length <= 1) {
      return <div></div>;
    }
    return (
      <div className="row v-dream__selector-section--highlight">
        <div className="row v-dream__selector-row">
          <h3 className="v-dream__selector__title col-xs-11 col-xs-offset-1">Selecione o tamanho:</h3>
          <div>
            {mock.skus.map( (sku, index) => {
              if (index == 0)
                return (
                  <button key={sku.id} className={ this.changeAvailability(sku.availability) + ' col-xs-offset-1 col-xs-2'}>
                    { sku.size }
                  </button> );
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
