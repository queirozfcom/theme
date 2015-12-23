import React from 'react';

class Categories extends React.Component {
    render() {
      return (<li><a href={'/' + this.props.cat.get('slug') + '/c'}>{this.props.cat.get('name')}</a></li>);
    }
}

export default Categories;
