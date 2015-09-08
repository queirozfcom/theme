import React from 'react';
import SelectVariation from './SelectVariation';
import './SkuSelector.less';

class SkuSelector extends React.Component {


  render() {
    let classes = 'v-dream__selector-section col-xs-12';
    classes = this.props.validationError ? ('v-dream__selector-section--highlight ' + classes) : classes;
    let variationName = this.props.skuVariations[0].name;
    let index = 0;

    return (
      <div className="row">
        <div id="selector" className={classes}>
          <div className="v-dream__selector-row row-fluid">
            <SelectVariation skus={this.props.skus} variationName={variationName} selectedVariation={this.props.selectedVariation}
                             skuVariations={this.props.skuVariations[index]} addFacet={this.props.addFacet} getAvailability={this.props.getAvailability}
                             getSkuVariations={this.getSkuVariations} removeFacet={this.props.removeFacet} changeAvailability={this.props.changeAvailability}
                             changeVariationState={this.props.changeVariationState}/>
          </div>
            { this.props.validationError ?
              <div className="row-fluid">
                <p className="col-xs-offset-1 col-xs-10 v-dream__selector-section__alert-text">Escolha uma opção disponível para adicionar o produto ao carrinho.</p>
              </div>
              : null}
        </div>
      </div>
    );
  }
}

export default SkuSelector;
