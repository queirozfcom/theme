import React from 'react';
import SelectVariation from './SelectVariation';
import 'styles/components/product/SkuSelector.less';

let mock = {
  name: 'Short Balneário',
  skus: [
    {
      id: 111,
      tamanho: 'PP',
      availability: 100
    },
    {
      id: 222,
      tamanho: 'P',
      availability: 0
    },
    {
      id: 333,
      tamanho: 'M',
      availability: 203
    },
    {
      id: 444,
      tamanho: 'G',
      availability: 2
    }
  ]
};

class SkuSelector extends React.Component {
  static defaultProps = {
    name: mock.name,
    skus: mock.skus,
    selectedSku: null,
    validationError: false
  }

  render() {
    let classes = 'v-dream__selector-section col-xs-12';
    classes = this.props.validationError ? ('v-dream__selector-section--highlight ' + classes) : classes;

    return (
      <div className="row">
        <div id="selector" className={classes}>
          <div className="v-dream__selector-row row-fluid">
            <SelectVariation skus={this.props.skus} variation="tamanho"/>
          </div>
            { this.props.validationError ?
              <div className="row-fluid">
                <p className="col-xs-offset-1 col-xs-10 v-dream__selector-section__alert-text">Escolha um tamanho e cor para adicionar o produto ao carrinho.</p>
              </div>
              : null}
        </div>
      </div>
    );
  }
}

export default SkuSelector;
