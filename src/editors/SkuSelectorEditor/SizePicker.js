import React from 'react';

class SizePicker extends React.Component {

  render() {
    let variationName = this.props.variationName;
    return (
      <div className="v-dream__selector-row row" key={this.props.variationName}>
        <div className="col-xs-12">
          <h3 className="v-dream__selector__title col-xs-12">{variationName}:</h3>
          <div className="v-dream__size-selector__wrapper col-xs-12">
            {
              this.props.variationKey.map((variation) => {
                  return (
                    <div key={variation}>
                      <button className= 'v-dream__size-selector col-xs-2'>
                        { variation }
                      </button>
                    </div>
                );
              })
            }
          </div>
        </div>
      </div>
  )}
}

export default SizePicker;
