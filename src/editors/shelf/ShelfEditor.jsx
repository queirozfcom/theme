import React from 'react';
import { dispatcher } from 'sdk';
import style from '../../styles/components/shelf/ShelfEditor.less'; //eslint-disable-line

class ShelfEditor extends React.Component {
  static defaultProps = {
    ShopStore: dispatcher.stores.ShopStore.getState()
  }

  constructor(props) {
    super(props);

    let settings = dispatcher.stores.SettingsStore.getState().getIn([this.props.route, this.props.id, 'settings']);
    if (settings) {
      this.state = settings.toJS();
    } else {
      this.state = {
        title: '',
        search: '',
        quantity: 1
      };
    }
  }

  maxQuantity = 6
  minQuantity = 1

  handleSave(ev) {
    ev.preventDefault();
    dispatcher.actions.SettingsActions.saveComponent({
      accountName: this.props.ShopStore.get('accountName'),
      route: this.props.route,
      component: 'Shelf@vtex.storefront-theme',
      id: this.props.id,
      settings: this.state
    });
    dispatcher.actions.EditorActions.closeEditor();
  }

  incrementQuantity(ev) {
    ev.preventDefault();
    if (parseInt(this.state.quantity) === this.maxQuantity) {
      return false;
    }
    this.setState({
      quantity: (parseInt(this.state.quantity) + 1)
    });
  }

  decrementQuantity(ev) {
    ev.preventDefault();
    if (parseInt(this.state.quantity) === this.minQuantity) {
      return false;
    }
    this.setState({
      quantity: (parseInt(this.state.quantity) - 1)
    });
  }

  changeValue(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  changeQuantity(ev) {
    let value = ev.target.value;
    if (isNaN(value) || (value !== '' && parseInt(value) < this.minQuantity || parseInt(value) > this.maxQuantity)) {
      return false;
    }

    value = value === '' ? value : parseInt(value);

    this.setState({
      [ev.target.name]: value
    });
  }

  render() {
    let ActionBar = this.props.actionBar;

    return (
      <div className="v-shelf-ed">
        <form className="v-shelf-ed__inner">
            <div className="v-shelf-ed__text-field">
              <label htmlFor="shelf-title">Título da Prateleira</label>
              <input id="shelf-title" className="form-control" name="title" type="text"
                     value={this.state.title} onChange={this.changeValue.bind(this)}
                     placeholder="Ex: Destaques, Promoção"/>
            </div>
            <div className="v-shelf-ed__text-field">
              <label htmlFor="shelf-search">Termo da Busca</label>
              <input id="shelf-search" className="form-control" name="search" type="text"
                     value={this.state.search} onChange={this.changeValue.bind(this)}
                     placeholder="Ex: camiseta, cadeira"/>
            </div>
            <div className="v-shelf-ed__quant-field">
              <label htmlFor="shelf-quantity">Quantidade de Produtos na Prateleira</label>
              <div className="v-shelf-ed__quant-selector">
                <button className="v-shelf-ed__quant-button--left" onTouchTap={this.decrementQuantity.bind(this)}> - </button>
                  <input id="shelf-quantity" className="v-shelf-ed__quant-selector__input" name="quantity" type="text"
                         value={this.state.quantity} onChange={this.changeQuantity.bind(this)}/>
                <button className="v-shelf-ed__quant-button--right" onTouchTap={this.incrementQuantity.bind(this)}> + </button>
              </div>
            </div>
        </form>

        <ActionBar onSave={this.handleSave.bind(this)}/>
      </div>
    );
  }
}

export default ShelfEditor;
