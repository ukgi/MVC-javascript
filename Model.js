import Validator from './utils/Validator.js';

export default class Model {
  #state;
  constructor(initalState) {
    this.#state = initalState;
  }

  storetodoItem(item) {
    const todoItem = Validator.validateUserInput(item, this.#state);
    this.#setState(item);
    return this.#state;
  }

  #setState(newTodo) {
    this.#state = [...this.#state, newTodo];
  }

  get todoList() {
    return this.#state;
  }
}
