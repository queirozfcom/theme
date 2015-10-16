import React from 'react';
import Img from 'utils/Img';
import './SkuSelector.less';

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
        <button className="v-clean-btn" style={{ border: 1}}
                data-is-available={this.props.getAvailability(this.props.value, this.props.variationName)}
                data-is-active={this.props.isActive} onTouchTap={this.changeState}>
          <Img className=" v-dream__selector-img"
          src={this.props.getImg(this.props.variationName, this.props.value)}
          width={200} height={235}/>
        </button>);
    }
  }

  render() {
    return (
      <div className="col-xs-2 v-dream__btn-align ">
        { this.displayValue() }
      </div>
    );
  }
}

export default VariationButton;
