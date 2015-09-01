import React from 'react';

class VariationButton extends React.Component {

  changeState = () => {
    this.props.changeVariationState(this.props.value);
  }

  render() {
    let isActive = this.props.isActive;
    let skus = this.props.skus;

    return (
      <button className={ this.props.changeAvailability(skus, isActive) + ' col-xs-2' } onTouchTap={this.props.changeState}>
        { this.props.value }
      </button>
    );
  }
}

export default VariationButton;
