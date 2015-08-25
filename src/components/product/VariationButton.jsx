import React from 'react';

class VariationButton extends React.Component {
  changeAvailability(skus, isActive) {
    if (skus[0].offers[0].availability > 0) { //checa a availability de skus da variation "groups", não de um sku especifico
      if(isActive)
        return 'v-dream__size-selector--active ';
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }

  changeState = () => {
    this.props.changeVariationState(this.props.value);
  }

  render() {
    let isActive = this.props.isActive;
    let skus = this.props.skus;

    return (
      <button className={ this.changeAvailability(skus, isActive) + ' col-xs-2' } onTouchTap={this.changeState}>
        { this.props.value }
      </button>
    );
  }
}

export default VariationButton;
