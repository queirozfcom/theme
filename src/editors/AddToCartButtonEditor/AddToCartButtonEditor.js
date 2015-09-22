import React from 'react';
import './AddToCartButtonEditor.less';
import ColorPicker from 'react-colorpicker'; // eslint-disable-line
import colr from 'colr';

class AddToCartButtonEditor extends React.Component {
  constructor(props) {
    super(props);

    let settings = this.props.settings;
    let color = settings ? settings.get('color') : '#75CCB1';
    let boxShadowColor = settings ? settings.get('boxShadowColor') : colr.fromHex(color).darken(8).toHex();

    this.state = {
      label: settings ? settings.get('label') : 'Adicionar ao carrinho',
      color: color,
      boxShadowColor: boxShadowColor
    };
  }

  changeValue = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  handleColorChange = (color) => {
    let colorHex = color.toHex();
    let boxShadowColorHex = color.darken(8).toHex();
    this.setState({
      color: colorHex,
      boxShadowColor: boxShadowColorHex
    })
  }

  handleSave = () => {
    this.props.saveSettings(this.state);
  }

  render() {
    let ActionBar = this.props.actionBar;

    return (
      <div className="v-add-to-cart-button__editor">

        <div className="v-add-to-cart-button__editor__wrapper">

          <a href="#" className="v-add-to-cart-button btn btn-block" style={{backgroundColor: this.state.color, boxShadow: `2px 2px 0px 0px ${this.state.boxShadowColor}`}}>{this.state.label}</a>

          <form className="v-add-to-cart-button__form">
            <div className="v-add-to-cart-button__form__wrapper">
              <div>
                <label htmlFor="label">Texto</label>
                <input id="label" className="form-control" type="text" name="label"
                       value={this.state.label} onChange={this.changeValue.bind(this)} placeholder="Adicionar ao carrinho"/>
              </div>

              { /* <div>
                <label htmlFor="label">Cor</label>
                <div className="row">
                  <div className="v-add-to-cart-button__color-picker col-xs-12">
                    <ColorPicker color={this.state.color} onChange={this.handleColorChange.bind(this)}/>
                  </div>
                </div>
              </div> */ }
            </div>
          </form>
        </div>

        <ActionBar onSave={this.handleSave.bind(this)}/>
      </div>
    );
  }
}

export default AddToCartButtonEditor;
