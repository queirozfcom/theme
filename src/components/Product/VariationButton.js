import React from 'react';
import Img from 'utils/Img';

class VariationButton extends React.Component {

  changeState = (ev) => {
    let displayType;
    if (this.props.variationName === 'Cor') {
      displayType = 'image';
    }
    ev.preventDefault();
    if (this.props.getAvailability(this.props.value, this.props.variationName) > 0) {
      this.props.isActive ? this.props.removeFacet(this.props.variationName) :
      this.props.addFacet(this.props.variationName, this.props.value, displayType);
    }
  }

  changeAvailability = (isActive) => {
    if (this.props.variationName === 'Tamanho') {
      if (this.props.getAvailability(this.props.value, this.props.variationName) > 0) {
        if (isActive) {
          return 'v-dream__size-selector--active ';
        }
        return 'v-dream__size-selector ';
      }
      return 'v-dream__size-selector--unavailable ';
    }
  }

  displayValue = () => {
    if (this.props.variationName === 'Tamanho') {
      return this.props.value;
    } else if (this.props.variationName === 'Cor') {  // if displayType === image (editor)
      return ( <Img className="v-product__photo"
        src={this.props.getImg(this.props.variationName, this.props.value)}
        width={200} height={235}/> );
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
