import React from 'react';
import { Link } from 'react-router';

class Categories extends React.Component {
  render() {
    return (
      <li>
        <Link to={`/${this.props.cat.get('slug')}/c`}>
          { this.props.cat.get('name') }
        </Link>
      </li>
    );
  }
}

export default Categories;
