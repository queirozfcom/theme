import React from 'react';
import SelectVariation from './SelectVariation';
import './SkuSelector.less';

class SkuSelector extends React.Component {

  getSkuVariations(skus) {
    let facetLevel = 0;
    let variations = [];

    skus.forEach(function(sku) {

      if (Array.isArray(variations)) {
        if(variations.indexOf(sku.properties[facetLevel].facet.values[0]) === -1) {
          variations.push(sku.properties[facetLevel].facet.values[0]);
        }
      } else {
        variations[0] = (sku.properties[facetLevel].facet.values[0]);
      }
    });
    console.log(variations);
    return variations;
  }

  render() {
    let classes = 'v-dream__selector-section col-xs-12';
    classes = this.props.validationError ? ('v-dream__selector-section--highlight ' + classes) : classes;
    let variation = this.props.skus[0].properties[0].facet.name;

    return (
      <div className="row">
        <div id="selector" className={classes}>
          <div className="v-dream__selector-row row-fluid">
            <SelectVariation skus={this.props.skus} variation={variation} selectedVariation={this.props.selectedVariation}
                             getSkuVariations={this.getSkuVariations} changeAvailability={this.props.changeAvailability} changeVariationState={this.props.changeVariationState}/>
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
