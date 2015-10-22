import React from 'react';
import './LetMeKnowButton.less';

class LetMeKnowButton extends React.Component {

  render() {
    let label = 'Avise-me';
    let backgroundColor = '#ddd';
    let boxShadowColor = '#57c1a0';

    return (
      <a className="v-let-me-know-button--fixed " style={{backgroundColor: backgroundColor, boxShadow: `2px 2px 0px 0px ${boxShadowColor}`}}>
        {label}
      </a>
    )
  }

}

export default LetMeKnowButton;
