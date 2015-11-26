import React from 'react';
import SelectVariation from './SelectVariation';
import './SkuSelector.less';
import { editable } from 'vtex-editor';

@editable({
  name: 'SkuSelector@vtex.storefront-theme',
  title: 'SkuSelector'
})
class SkuSelector extends React.Component {
  render() {
    let classes = 'v-dream__selector-section col-xs-12';

    return (
      <div className="row clearfix">
        <div className={classes}>
        {
          this.props.skuVariations.map((variationType) => {
            return (
              <div className="v-dream__selector-row row-fluid" key={variationType.name}>
                <SelectVariation skus={this.props.skus} filteredSkus={this.props.filteredSkus}
                                 addFacet={this.props.addFacet} removeFacet={this.props.removeFacet}
                                 facets={this.props.facets} skuVariations={variationType}
                                 id="select-variation" route="product"/>
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}

export default SkuSelector;
