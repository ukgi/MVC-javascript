export default class View {
  #target;
  #initalState;
  constructor(initalState) {
    this.#target = document.querySelector('#todo-list');
    this.#initalState = initalState;
  }
  renderTodoList(todoList) {
    this.#target.innerHTML = `
    ${todoList.map((todo) => `<li>${todo}</li>`).join('')}
    `;
  }
}
