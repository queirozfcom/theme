import React from 'react';
import CategoryListOption from './CategoryListOption/CategoryListOption.js'
import './CategoryListSidebar.less';

class CategoryListSidebar extends React.Component {
  render() {
    return (
      <nav className="CategoryListSidebar" role="navigation">
        <span className="CategoryListSidebar__title">Mais categorias</span>
        <h3 className="CategoryListSidebar__header">Feminino</h3>
        <ul className="CategoryListSidebar__list">
          <CategoryListOption/>
          <CategoryListOption/>
          <CategoryListOption/>
          <CategoryListOption/>          
        </ul>
      </nav>
    );
  }
}

export default CategoryListSidebar;
