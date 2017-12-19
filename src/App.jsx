import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

import Component from './Component';
import todos from './todos'
import Header from './components/Header';
import Todo from './components/Todo';
import './style.scss';

// function App() {
//   return (
//     <div>
//       <h1>React!!!!</h1>
//       <p>ghbsdf</p>
//     </div>
//   );
// }
// const title = React.createElement('h1',{className: 'class-title'} , 'React Todo');
// console.log(title);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.initialData
    };
    this.handelStatusChange = this.handelStatusChange.bind(this);
    this.handelDelete = this.handelDelete.bind(this);
  }
  handelStatusChange(id) {
    let todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos: todos});
    console.log('onStatusChange', id);
  }
  handelDelete(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos: todos });
  }
  render() {
    return (
      <main>

        <Header title={this.props.title} todos={this.state.todos}/>
        <section className="todo-list">
          {this.state.todos.map(todo => 
            <Todo 
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onStatusChange={this.handelStatusChange}
              onDelete={this.handelDelete}
            />)
          }


        </section>
      </main>
    )
  }
  
}

// function App(props) {
//   console.log(props);
//   return (
//     <main>
      
//       <Header title={props.title}/>
//       <section className="todo-list">
//         {props.todos.map(todo => 
//           <Todo key={todo.id} title={todo.title} completed={todo.completed} />)
//         }
        
        
//       </section>
//     </main>
//   );
// }

App.propTypes = {
  title: PropTypes.string,
  initialData: PropTypes.arrayOf(PropTypes.shape ({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

App.defaultProps = {
  title: 'React Todo'
}
ReactDom.render(<App initialData={todos}/>, document.getElementById('root'));