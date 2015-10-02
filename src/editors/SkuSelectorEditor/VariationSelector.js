import React from 'react';
import SizePicker from './SizePicker';
import ImgPicker from './ImgPicker';
import Dragula from 'react-dragula';

class VariationSelector extends React.Component {
  state = {
    variationName: this.props.settings ? this.props.settings.get('variationName') : 'Variação',
    variationKey: this.props.settings ? this.props.settings.get(variationKey) : ['PP','P','M','G','GG']
  }

changeVariationName = (e) => {
  this.setState({
    variationName: e.target.value
  });
}

getVariatonSelector = () => {
  // let variationName = this.state.variationName;
  // let variationKey = this.state.variationKey;
  if(variationName === 'Tamanho') {
    return (
      null
    );
  } else {
    return (
      null
    );
  }
}

componentDidMount = () => {
   var container = React.findDOMNode(this);
   Dragula([container]);
 }

  render() {

    return (
      <div>
        <SizePicker variationName={this.state.variationName} variationKey={this.state.variationKey}/>
        <ImgPicker variationName={this.state.variationName} variationKey={this.state.variationKey}/>
      </div>
    );
  }
}

export default VariationSelector;
