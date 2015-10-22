import React from 'react';
import './MailInput.less';

class MailInput extends React.Component {

  render() {

    return (
      <div className="v-dream__mail-request container">
        <h2>Insira o seu e-mail abaixo para receber um aviso quando este produto estiver disponível para a compra</h2>
        <div className="v-dream__mail-form row">
          <input
            type="e-mail"
            id="MailInput"
            className="v-dream__mail-input col-xs-10 col-xs-offset-1"
            placeholder="seu e-mail"/>
        </div>
        <button type="button" className="btn btn-default col-xs-4 col-xs-offset-4">Avise-me</button>
      </div>
    )
  }

}

export default MailInput;
