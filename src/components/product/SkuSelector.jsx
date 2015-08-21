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
          <div className="col-xs-12" margin-bottom='10px'>
            <h3 className="v-dream__selector__title col-xs-11">Selecione o tamanho:</h3>
            <div className="v-dream__size-selector__wrapper col-xs-11">
            {mock.skus.map((sku) =>
              <button key={sku.id} className={ this.changeAvailability(sku.availability) + ' col-xs-2'}>
                { sku.size }
              </button>
            )}
            </div>
          </div>
    );
  }

  displayColorVariations() {
    return (
      <div className="col-xs-12">
        <h3 className="v-dream__selector__title col-xs-11">Selecione a cor:</h3>
        <div className="v-dream__color-selector__wrapper col-xs-11">
          <button className="v-dream__color-selector col-xs-2"></button>
          <button className="v-dream__color-selector col-xs-2"></button>
          <button className="v-dream__color-selector col-xs-2"></button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="row">
        <div className="v-dream__selector-section--highlight col-xs-12">
          <div className="v-dream__selector-row  row-fluid">
            <div>
              { this.checkVariations(mock.skus) }
            </div>
          </div>
          <div className="v-dream__selector-row row-fluid">
              { this.displayColorVariations() }
          </div>
          <div className="row-fluid">
            <p className="col-xs-offset-1 col-xs-10 v-dream__selector-section__alert-text">Escolha um tamanho e cor para adicionar o produto ao carrinho.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SkuSelector;
