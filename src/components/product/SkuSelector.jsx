import React from 'react';
import 'styles/components/product/SkuSelector.less';
class SkuSelector extends React.Component {
  changeAvailability(availability) {
    if (availability > 0) {
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }

  render() {
    return (
    );
  }
}
export default SkuSelector;
