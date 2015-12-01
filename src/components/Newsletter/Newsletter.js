import React from 'react';
import './Newsletter.less';

class Newsletter extends React.Component {
  render() {
    return (
      <div className="Newsletter row-fluid">
        <p className="Newsletter__title col-xs-3">Assine nossa newsletter:</p>
        <div className="row-fluid col-xs-9">
          <div className="Newsletter__form input-group">
            <input type="e-mail" className="Newsletter__form-input form-control" placeholder="e-mail"/>
            <span className="input-group-btn">
              <button className="Newsletter__form-button btn btn-default" type="button">
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
