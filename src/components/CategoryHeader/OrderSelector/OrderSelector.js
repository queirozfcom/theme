import React from 'react';
import Select from 'react-select';
import '../../../../node_modules/react-select/dist/react-select.min.css';
import './OrderSelector.less';

class OrderSelector extends React.Component {
  render() {
    let options = [
      { value: 'one', label: 'Nome (A - Z)', clearableValue: false },
      { value: 'one', label: 'Nome (Z - A)', clearableValue: false },
      { value: 'two', label: 'Maior Preço', clearableValue: false },
      { value: 'two', label: 'Menor Preço', clearableValue: false }
    ]

    function logChange(val) {
      console.log('Selected: ' + val);
    }

    return (
      <div className="OrderSelector">
        <Select
            name="form-field-name"
            value="one"
            clearable={false}
            options={options}
            placeholder="Selecione a ordenação"
            onChange={logChange}
            name="Ordenação"
        />
      </div>
    );
  }
}

export default OrderSelector;
