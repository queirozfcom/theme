import React from 'react';
import SelectVariation from './SelectVariation';
import './SkuSelector.less';

class SkuSelector extends React.Component {
    static defaultProps = {
      selectedSku: null,
      validationError: false
    }

  // static propTypes = {
  //   value: React.PropTypes.number.isRequired,
  //   ShopStore: React.PropTypes.object.isRequired
  // }

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
