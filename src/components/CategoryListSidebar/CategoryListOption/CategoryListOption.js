import React from 'react';
import { Link } from 'react-router';
import './CategoryListOption.less';

class CategoryListOption extends React.Component {
  render() {
    return (
      <li className="CategoryListOption">
        <Link
          to={this.props.slug}
          query={{ pageSize: 10 }}
          className="CategoryListOption__link"
        >
          { this.props.name }
        </Link>
      </li>
    );
  }
}

export default CategoryListOption;
