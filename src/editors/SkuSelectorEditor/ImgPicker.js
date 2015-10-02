import React from 'react';
import Img from 'utils/Img';
import Dragula from 'react-dragula';


class ImgPicker extends React.Component {

  componentDidMount = () => {
     var container = React.findDOMNode(this);
     Dragula([container]);
   }

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
                      <button className= 'col-xs-2'>
                        <Img className="v-product__photo" src={"http://basedevmkp.vteximg.com.br/arquivos/ids/170014-200-200/tumblr_n5pj9sfxZL1r5s8dro1_1280.jpg"} width={200} height={235}/>
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

export default ImgPicker;
