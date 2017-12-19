import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class From extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form ClassName="todo-form">
        <input type="text" placeholder="Что нужно?"/>
        <Button type="submit" /><Button/>
      </form>
    );
  }
}