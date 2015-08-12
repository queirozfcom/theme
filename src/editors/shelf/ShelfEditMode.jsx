import React from 'react';
import { dispatcher } from 'sdk';

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
      <div className="v-shelf-ed__placeholder" onTouchTap={this.handleOpenEditor}>
        oi shelfeditmode
      </div>
    );
  }
}

export default ShelfEditMode;
