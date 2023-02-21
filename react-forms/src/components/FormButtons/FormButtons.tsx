import React, { Component } from 'react';
import './FormButtons.css';

interface MyProps {
  disabled: boolean;
}

export default class FormButtons extends Component<MyProps> {
  render() {
    return (
      <div className="panelButtons">
        <input type="submit" value="Create Card" disabled={this.props.disabled} />
        <input type="reset" value="Reset" />
      </div>
    );
  }
}
