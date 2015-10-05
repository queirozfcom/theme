import React from 'react';
import SelectVariation from './SelectVariation';
import './SkuSelector.less';
import { storefront } from 'sdk';

@storefront({
  name: 'SkuSelector@vtex.storefront-theme',
  title: 'SkuSelector',
  editable: true
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
                <SelectVariation skus={this.props.skus} removeFacet={this.props.removeFacet} facets={this.props.facets}
                                 skuVariations={variationType} addFacet={this.props.addFacet} getAvailability={this.props.getAvailability}
                                 getSkuVariations={this.getSkuVariations} changeAvailability={this.props.changeAvailability}
                                 getImg={this.props.getImg} id="select-variation" route="product"/>
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default SkuSelector;
