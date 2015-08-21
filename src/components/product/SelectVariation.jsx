import React from 'react';

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
    return (
      <div className="col-xs-12" margin-bottom='10px'>
        <h3 className="v-dream__selector__title col-xs-11">Selecione o {this.props.variation}:</h3>
        <div className="v-dream__size-selector__wrapper col-xs-11">
        {this.props.skus.map((sku) =>
          <button key={sku.id} className={ this.changeAvailability(sku.availability) + ' col-xs-2'}>
            { sku[this.props.variation] }
          </button>
        )}
        </div>
      </div>
    );
  }
}

export default SelectVariation;
