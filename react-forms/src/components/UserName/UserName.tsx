import React, { ChangeEvent, Component } from 'react';
import './UserName.css';

interface MyProps {
  name: string;
}

export default class UserName extends Component<MyProps> {
  render() {
    return (
      <div className="firstNameWrapper">
        <label>{this.props.name}</label>
        <input
          type="text"
          id="fname"
          /* value={this.state.firstName} */
          /* onChange={(e: ChangeEvent<HTMLInputElement>) =>
            this.setState({ firstName: e.target.value }) 
          }*/
        />
      </div>
    );
  }
}
