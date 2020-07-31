import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      // selectedTaskToBeRemoved: 'Waiting for a task to be selected',
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTaskToRemove(todo) {
    this.setState({
      selectedTaskToBeRemoved: todo,
    });
  }

  removeSelectedTaskOnClick() {
    const taskToBeRemoved = this.state.selectedTaskToBeRemoved;
    console.log('task removida: ' + taskToBeRemoved);
    // arr = arr.filter(e => e !== 'B')
    const listWithRemovedItem = this.state.listTodo.filter(
      (e) => e !== taskToBeRemoved,
    );
    console.log('lista que sobrou: ' + listWithRemovedItem);
    console.log('---------------');
    console.log(
      'O teste espera que o botão de remover esteja desabilitado, porém, ainda tem uma task',
    );
    this.setState((state) => ({
      listTodo: listWithRemovedItem,
    }));
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        {listTodo && (
          <ul>
            {listTodo.map((todo, index) => (
              <li key={index + 1} style={(this.state.selectedTaskToBeRemoved === todo) ? {'backgroundColor': 'lightgray'} : null}>
                <Item
                  content={todo}
                  click={() => this.selectTaskToRemove(todo)}
                />
              </li>
            ))}
          </ul>
        )}
        <input
          id="btnRmv"
          data-testid="id-remove"
          type="button"
          value="Remover"
          disabled={this.state.listTodo.length === 0 ? true : false}
          onClick={() => this.removeSelectedTaskOnClick()}
        />
        <p>{'selected task: ' + this.state.selectedTaskToBeRemoved}</p>
      </div>
    );
  }
}
export default App;
