export default class Controller {
  #model;
  #view;
  constructor(model, view) {
    this.#model = model;
    this.#view = view;

    this.$form = document.querySelector('form');
    this.$form.addEventListener('submit', (e) => {
      e.preventDefault();
      const userInput = e.target[0].value;
      this.#enterUserTodo(userInput);
    });
  }

  #enterUserTodo(userInput) {
    const todoListData = this.#model.storetodoItem(userInput);
    this.#view.renderTodoList(todoListData);
  }
}
