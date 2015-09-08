import React from 'react';

class VariationButton extends React.Component {

  changeState = (ev) => {
    ev.preventDefault();
    this.props.changeVariationState(this.props.variationName, this.props.value);
    this.props.addFacet(this.props.variationName, this.props.value);
  }

  changeAvailability = (isActive) => {
    if (this.props.getAvailability(this.props.value) > 0) {
      if(isActive)
        return 'v-dream__size-selector--active ';
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }

  render() {
    let isActive = this.props.isActive;
  //  let skus = this.props.skus;

    return (
      <button className={ this.changeAvailability(isActive) + ' col-xs-2' } onTouchTap={this.changeState}>
        { this.props.value }
      </button>
    );
  }
}

export default VariationButton;
