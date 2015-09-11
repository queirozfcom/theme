import React from 'react';

class VariationButton extends React.Component {

  changeState = (ev) => {
    ev.preventDefault();
    this.props.isActive ? this.props.removeFacet(this.props.variationName, this.props.value) :
    this.props.addFacet(this.props.variationName, this.props.value);
  }

  changeAvailability = (isActive, variationName) => {
    if(variationName === 'Tamanho') {
      if (this.props.getAvailability(this.props.value) > 0) {
        if(isActive)
          return 'v-dream__size-selector--active ';
        return 'v-dream__size-selector ';
      }
      return 'v-dream__size-selector--unavailable ';
  } else if(variationName === 'Cor') {
    if (this.props.getAvailability(this.props.value) > 0) {
      if(isActive)
        return 'v-dream__color-selector--active ';
      return 'v-dream__color-selector ';
    }
    return 'v-dream__color-selector--unavailable ';
}
}

  displayValue = (variationName) => {
    if(variationName === 'Tamanho') {
      return this.props.value;
    } else {
      return null;
    }
  }

  render() {
    let isActive = this.props.isActive;

    return (
      <button className={ this.changeAvailability(isActive, this.props.variationName) + ' col-xs-2' } onTouchTap={this.changeState}>
        { this.displayValue(this.props.variationName) }
      </button>
    );
  }
}

export default VariationButton;
