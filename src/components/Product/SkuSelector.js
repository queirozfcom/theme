import React from 'react';
import SelectVariation from './SelectVariation';
import './SkuSelector.less';

class SkuSelector extends React.Component {
    state = {
      selectedVariation: false,
      selectedSku: null,
      validationError: true
    }

  // static propTypes = {
  //   value: React.PropTypes.number.isRequired,
  //   ShopStore: React.PropTypes.object.isRequired
  // }

  changeVariationState = (activeVar) => {
    if (activeVar === this.state.selectedVariation) {
      this.setState({selectedVariation: null});
    } else {
      this.setState({selectedVariation: activeVar});
    }
  }

  getSkuGroups(skus, facetLevel) {
    let group = {};

    skus.forEach(function(sku) {
      let key = sku.properties[facetLevel].facet.values[0];

      if (Array.isArray(group[key])) {
        group[key].push(sku);
      } else {
        group[key] = [sku];
      }
    });

    return group;
  }

  render() {
    console.log(this.state.selectedVariation + ' eh o estado do pai');

    let classes = 'v-dream__selector-section col-xs-12';
    classes = this.props.validationError ? ('v-dream__selector-section--highlight ' + classes) : classes;
    let variation = this.props.skus[0].properties[0].facet.slug;

    let levels = {};
    for (let i = 0, x = this.props.skus.properties.length; i < x; i++) {
      this.props.skus.properties[i].forEach((facet) => {
        let key = levels[i.toString()];
        
      });
    }

    return (
      <div className="row">
        <div id="selector" className={classes}>
          <div className="v-dream__selector-row row-fluid">
            <SelectVariation skus={this.props.skus} variation={variation} selectedVariation={this.state.selectedVariation}
                             getSkuGroups={this.getSkuGroups} changeVariationState={this.changeVariationState} />
          </div>
            { this.props.validationError ?
              <div className="row-fluid">
                <p className="col-xs-offset-1 col-xs-10 v-dream__selector-section__alert-text">Escolha um { variation } para adicionar o produto ao carrinho.</p>
              </div>
              : null}
        </div>
      </div>
    );
  }
}

export default SkuSelector;
