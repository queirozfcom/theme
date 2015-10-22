import React from 'react';
import './LetMeKnowButton.less';

class LetMeKnowButton extends React.Component {

  handleTouchTap = () => {
    this.props.handleMailInput(true);
  }

  render() {
    let label = 'Avise-me';
    let backgroundColor = '#ddd';
    let boxShadowColor = '#57c1a0';
    let sendMail = this.props.mailInput ? null : null;

    return (
      <a href={sendMail} className="v-let-me-know-button--fixed " style={{backgroundColor: backgroundColor, boxShadow: `2px 2px 0px 0px ${boxShadowColor}`}}
         onTouchTap={this.handleTouchTap}>
        {label}
      </a>
    )
  }

}

export default LetMeKnowButton;
