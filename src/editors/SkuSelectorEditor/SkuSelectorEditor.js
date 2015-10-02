import React from 'react';
import VariationSelector from './VariationSelector';
import Dragula from 'react-dragula';

class SkuSelectorEditor extends React.Component {
  constructor(props) {
  super(props);

  let settings = this.props.settings;
  this.state = {
    skuList: settings ? settings.get('skuList') : false,
    variationOrder: settings ? settings.get('variationOrder') : ['Tamanho', 'Cor'],
    buttonOrder: settings ? settings.get('buttonOrder') : [{name:'Tamanho', variationKey:['']},{}]
  };
}

handleSave = () => {
  this.props.saveSettings(this.state);
}


getVariatonSelector = () => {
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
    let ActionBar = this.props.actionBar;

    return (
      <div className="container">
        <VariationSelector settings={this.props.settings} variationName={this.state.variationName} variationKey={this.state.variationKey}/>
        <ActionBar/>
      </div>
    );
  }
}

export default SkuSelectorEditor;
