import React from 'react';
import { dispatcher } from 'sdk';
import 'styles/components/shelf/ShelfEditMode.less';
import ShelfSlider from 'components/shelf/ShelfSlider';

class ShelfEditMode extends React.Component {
  handleOpenEditor = () => {
    dispatcher.actions.EditorActions.openEditor({
      component: 'ShelfEditor',
      route: this.props.route,
      id: this.props.id
    });
  }

  render() {
    return (
      <div className="v-shelf-ed__placeholder row-fluid" onTouchTap={this.handleOpenEditor}>
        <span className="v-shelf-ed__component-name">Prateleira</span>
        <ShelfSlider {...this.props}/>
      </div>
    );
  }
}

export default ShelfEditMode;
