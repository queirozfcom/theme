import React from 'react';
import './MailInput.less';

class MailInput extends React.Component {
  state = {
    mailToSend: null
  }

  getEmail = (e) => {
    this.setState({ mailToSend: e.target.value });
  }

  render() {

    return (
      <div className="v-dream__mail-request container-fluid">
        <h2>Avise-me quando estiver disponível</h2>
        <div className="v-dream__mail-form row">
          <input
            value={this.state.mailToSend}
            type="e-mail"
            id="MailInput"
            className="v-dream__mail-input col-xs-10 col-xs-offset-1"
            placeholder="seu e-mail"
            onChange={this.getEmail}/>
        </div>
      </div>
    )
  }

}

export default MailInput;
