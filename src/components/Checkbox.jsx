import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
  return (
    <button className="checkbox icon" onClick={props.onChange}>
      <i className="material-icons">{props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
    </button>
  );
}
Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
  
};
// class Checkbox extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       checked: this.props.initiallyChecked
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick(event) {
//     // console.log(this);
//     // this.state.checked = !this.state.checked;
//     this.setState({
//       checked: !this.state.checked
//     });
//   }
//   render() {
//     return (
//       <button className="checkbox icon" onClick={this.handleClick}>
//         <i className="material-icons">{this.state.checked ? 'check_box' : 'check_box_outline_blank'}</i>
//       </button>
//     );
//   }
  
// };
// Checkbox.propTypes = {
//   initiallyChecked: PropTypes.bool.isRequired

// };

export default Checkbox;