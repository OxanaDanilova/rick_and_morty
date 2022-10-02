import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  render() {
    return (
      <form>
        <label>First name</label>
        <input type="text" id="fname" />
        <label>Second name</label>
        <input type="text" id="fname" />
        <label>Date of birth</label>
        <input type="date" name="dob" id="dob" />
        <label>Country</label>
        <select>
          <option>Germany</option>
          <option>Kasachstan</option>
          <option>Russia</option>
          <option>China</option>
          <option>Spain</option>
        </select>
        <label className="switch">
          Male
          <input type="checkbox" name="gender" id="gender" />
          <span className="slider round"></span>Female
        </label>
        <input type="file" name="avatar" id="avatar" />
        <label htmlFor="user-agreement">I consent to my personal data</label>
        <input type="checkbox" name="user-agreement" id="user-agreement" />
      </form>
    );
  }
}
