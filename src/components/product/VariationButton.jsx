import React from 'react';

class VariationButton extends React.Component {
  state = {
    isActive: false
  }

  changeAvailability(availability, isActive) {
    if (availability > 0) {
      if(isActive)
        return 'v-dream__size-selector--active ';
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }

  changeState(sku) {
    return () => {
      this.setState({isActive: !this.state.isActive});
      console.log(sku.tamanho + ' selecionado'); //imprime todos os skus, mesmo sem selecionar nada
      console.log(this.props.getSkuGroups(this.props.skus, 1));
    }
  }

  render() {
    let isActive = this.state.isActive;
    let sku = this.props.skus[0]; //availability somente do primeiro sku
    console.log(this.state.isActive);

    return (
      <button className={ this.changeAvailability(sku.offers[0].availability, isActive) + ' col-xs-2' } onTouchTap={this.changeState(sku)}>
        { this.props.value }
      </button>
    );
  }
}

export default VariationButton;
