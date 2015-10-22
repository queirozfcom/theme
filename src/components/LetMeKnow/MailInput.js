import React from 'react';
import './MailInput.less';

class MailInput extends React.Component {

  render() {

    return (
      <div className="v-dream__mail-request container-fluid">
        <h2>Avise-me quando este produto estiver disponível</h2>
        <div className="v-dream__mail-form row">
          <input
            type="e-mail"
            id="MailInput"
            className="v-dream__mail-input col-xs-10 col-xs-offset-1"
            placeholder="seu e-mail"/>
        </div>
      </div>
    )
  }

}

export default MailInput;
