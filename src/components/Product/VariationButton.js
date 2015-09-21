import React from 'react';

class VariationButton extends React.Component {

  changeState = (ev) => {
    ev.preventDefault();
    this.props.isActive ? this.props.removeFacet(this.props.variationName, this.props.value) :
    this.props.addFacet(this.props.variationName, this.props.value);
  }

  changeAvailability = (isActive) => {
    if(this.props.variationName === 'Tamanho') {
      if (this.props.getAvailability(this.props.value, this.props.variationName) > 0) {
        if(isActive)
          return 'v-dream__size-selector--active ';
        return 'v-dream__size-selector ';
      }
      return 'v-dream__size-selector--unavailable ';
  } else if(this.props.variationName === 'Cor') {
    if (this.props.getAvailability(this.props.value, this.props.variationName) > 0) {
      if(isActive)
        return 'v-dream__color-selector--active ';
      return 'v-dream__color-selector ';
    }
    return 'v-dream__color-selector--unavailable ';
}
}

  displayValue = () => {
    if(this.props.variationName === 'Tamanho') {
      return this.props.value;
    } else {
      return null;
    }
  }

  render() {
    let isActive = this.props.isActive;

    return (
      <button className={ this.changeAvailability(isActive) + ' col-xs-2' } onTouchTap={this.changeState}>
        { this.displayValue() }
      </button>
    );
  }
}

export default VariationButton;
