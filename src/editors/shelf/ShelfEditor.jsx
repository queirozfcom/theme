import React from 'react';
import style from '../../styles/components/shelf/ShelfEditor.less'; //eslint-disable-line

class ShelfEditor extends React.Component {
  render() {
    let ActionBar = this.props.actionBar;

    return (
      <div className="v-shelf-ed">
        <form className="v-shelf-ed__inner">
            <div className="v-shelf-ed__text-field">
              <label htmlFor="shelf-name">Nome da Prateleira</label>
              <input id="shelf-name" className="form-control" type="url" placeholder="Nome da Prateleira"/>
            </div>
            <div className="v-shelf-ed__text-field">
              <label htmlFor="text">Coleção</label>
              <input id="alt" className="form-control" type="url" placeholder="ID da coleção"/>
            </div>
            <div className="v-shelf-ed__quant-field">
              <label htmlFor="text">Quantidade de Produtos na Prateleira</label>
              <div className="v-shelf-ed__quant-selector">
                <button className="v-shelf-ed__quant-button--left"> - </button>
                  <input type="text" className="v-shelf-ed__quant-selector__input" placeholder="1" />
                <button className="v-shelf-ed__quant-button--right"> + </button>
              </div>
            </div>
        </form>

        <ActionBar onSave={() => console.log('oi')}/>
      </div>
    );
  }
}

export default ShelfEditor;
