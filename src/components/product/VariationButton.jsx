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
      console.log(this.state.isActive);
      this.setState({isActive: !this.state.isActive});
      console.log(sku.tamanho + ' selecionado'); //imprime todos os skus, mesmo sem selecionar nada

    }
  }


  render() {
    let isActive = this.state.isActive;
    let sku = this.props.sku;
    console.log(this.state.isActive);


    return (
      <button className={ this.changeAvailability(sku.availability, isActive) + ' col-xs-2' } onTouchTap={this.changeState(sku)}>
        { sku[this.props.variation] }
      </button>
    );
  }
}

export default VariationButton;
