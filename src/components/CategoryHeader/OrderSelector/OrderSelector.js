import React from 'react';
import { history } from 'sdk';
import Select from 'react-select';
import '../../../../node_modules/react-select/dist/react-select.min.css';
import './OrderSelector.less';

class OrderSelector extends React.Component {
  componentWillMount() {
    this.state = {
      selectedOrder: this.props.location.query.sort || null
    };
  }

  componentWillReceiveProps({ location }) {
    if (this.props.location.query.sort !== location.query.sort) {
      this.setState({
        selectedOrder: location.query.sort || null
      });
    }
  }

  handleChange = (ev) => {
    let queries = {...this.props.location.query};
    queries.sort = ev.value;

    history.pushState(null, this.props.location.pathname, queries);
  }

  render() {
    let options = [
      { value: 'name-asc', label: 'Nome (A - Z)', clearableValue: false },
      { value: 'name-desc', label: 'Nome (Z - A)', clearableValue: false },
      { value: 'price-desc', label: 'Maior Preço', clearableValue: false },
      { value: 'price-asc', label: 'Menor Preço', clearableValue: false }
    ];

    return (
      <div className="OrderSelector">
        <Select
          name="Ordenação"
          value={this.state.selectedOrder}
          clearable={false}
          searchable={false}
          options={options}
          placeholder="Selecione a ordenação"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default OrderSelector;
