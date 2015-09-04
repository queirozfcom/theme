import React from 'react';
import './ProductDescription.less';

class Description extends React.Component {
  render() {
    return (
      <div>
        <div className="row v-dream__product-description">
            <h3 className="v-dream__product-description__title">Descrição</h3>
            <div className="v-dream__product-description__text">
              <p>A Fera Fashion acredita que o conforto faz um bom guarda-roupa. Queremos que você aproveite sua liberdade com simplicidade, qualidade e ao mesmo tempo tenha certeza que sua roupa é particulamente confortável de usar.</p>
              <p>87% modal</p>
              <p>10% seda</p>
              <p>3% elastano</p>
            </div>
        </div>
      </div>
    )
  }
}

export default Description;
