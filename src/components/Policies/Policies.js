import React from 'react';
import './Policies.less';

class Policies extends React.Component {
  render() {
    return (
      <div className="Policies clearfix">
        <hr/>
        <div className="Policies__single col-md-4 row-fluid clearfix">
          <h3 className="Policies__single-title">
            Frete Grátis
          </h3>
          <div className="col-xs-12">
            <p className="Policies__description">Para a região sudeste, nas compras acima de R$ 149,00.</p>
          </div>
        </div>

        <div className="Policies__single col-md-4 row-fluid clearfix">
          <h3 className="Policies__single-title col-xs-9">
            Parcelamos sua compra
          </h3>
          <div className="col-xs-12">
            <p className="Policies__description">Parcelamos em 3 vezes sem juros compras acima de R$ 99,00</p>
          </div>
        </div>

        <div className="Policies__single col-md-4 row-fluid clearfix">
          <h3 className="Policies__single-title col-xs-9">
            Entregamos em todo o Brasil
          </h3>
          <div className="col-xs-12">
            <p className="Policies__description">Através dos Correios.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Policies;
