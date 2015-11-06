import React from 'react';
import './style.less';

class Newsletter extends React.Component {
  render() {
    return (
      <div className="v-newsletter row-fluid">
        <p className="v-newsletter__title col-xs-3">Assine nossa newsletter:</p>
        <div className="row-fluid col-xs-9">
          <div className="v-newsletter__form input-group">
            <input type="e-mail" className="v-newsletter__form-input form-control" placeholder="e-mail"/>
            <span className="input-group-btn">
              <button className="v-newsletter__form-button btn btn-default" type="button">
                Assinar
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
