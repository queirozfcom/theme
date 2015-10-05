import React from 'react';
import Img from 'utils/Img';
import './SkuSelector.less';

class VariationButton extends React.Component {

  changeState = (ev) => {
    ev.preventDefault();
    if (this.props.getAvailability(this.props.value, this.props.variationName) > 0) {
      this.props.isActive ? this.props.removeFacet(this.props.variationName) :
      this.props.addFacet(this.props.variationName, this.props.value, displayType);
    }
  }

  changeAvailability = (isActive) => {
    if(this.props.variationName === 'Tamanho') {
      if (this.props.getAvailability(this.props.value, this.props.variationName) > 0) {
        if(isActive)
          return 'v-dream__size-selector--active ';
        return 'v-dream__size-selector ';
      }
      return 'v-dream__size-selector--unavailable ';
    }
}

  displayValue = () => {
    if (this.props.variationName === 'Tamanho') {
      return (
        <button className="v-dream__selector-btn" data-is-active={this.props.isActive}
        data-is-available={this.props.getAvailability(this.props.value, this.props.variationName)}
        onTouchTap={this.changeState}>
          { this.props.value }
        </button>);
    } else if (this.props.variationName === 'Cor') {  // if displayType === image (editor)
      return (
        <button className="v-clean-btn">
          <Img className=" v-dream__selector-img" data-is-active={this.props.isActive}
          data-is-available={this.props.getAvailability(this.props.value, this.props.variationName)}
          onTouchTap={this.changeState} src={this.props.getImg(this.props.variationName, this.props.value)}
          width={200} height={235}/>
        </button>);
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
