import React from 'react';

class TodoDetailView extends React.Component {
  constructor(prop = {}) {
    super(prop);
    this.prop = prop;
  }

  render() {

    return (
      <div key={this.prop.id}>
        <span>{this.prop.body}</span>
        <button onClick={this.handleRemove.bind(this, this.prop)}>Remove</button>
      </div>
    );

  }
}
