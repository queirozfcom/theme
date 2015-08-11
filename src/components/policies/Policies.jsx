import React from 'react';
import style from 'styles/components/policies/Policies.less'; // eslint-disable-line

class Policies extends React.Component {
  render() {
    return (
      <div className="v-policies clearfix">
        <h2 className="v-policies__title row-fluid">Só para feras</h2>

        <div className="v-policies__policy row-fluid clearfix">
          <div className="col-xs-1 col-xs-offset-1">
            <div className="v-icon__exchange"></div>
          </div>
          <h3 className="v-policies__policy-title col-xs-9">Troca fácil</h3>

          <div className="v-policies__policy-description col-xs-10 col-xs-offset-1">
            <p>A gente dá 30 dias, após o recebimento, para você ter certeza de que a sua roupa ficou perfeita! E com certeza vai ficar.</p>
          </div>
        </div>

        <div className="v-policies__policy row-fluid clearfix">
          <div className="col-xs-1 col-xs-offset-1">
            <div className="v-icon__shipping"></div>
          </div>
          <h3 className="v-policies__policy-title col-xs-9">Frete Grátis</h3>

          <div className="v-policies__policy-description col-xs-10 col-xs-offset-1">
            <p>Oferecemos frete grátis em qualquer compra a partir de 2 produtos. Para (quase) qualquer lugar do Brasil.</p>
          </div>
        </div>

        <div className="v-policies__policy row-fluid clearfix">
          <div className="col-xs-1 col-xs-offset-1">
            <div className="v-icon__gift"></div>
          </div>
          <h3 className="v-policies__policy-title col-xs-9">Mimos de aniversário</h3>

          <div className="v-policies__policy-description col-xs-10 col-xs-offset-1">
            <p>Durante todo o mês do seu aniversário, você ganha 20% de desconto em qualquer produto da loja!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Policies;
