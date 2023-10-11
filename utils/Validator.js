export default class Validator {
  static validateUserInput(input, todoList) {
    const copyInput = input;
    if (input.length === 0) throw new Error('[ERROR]: 입력값을 입력해주세요');
    if (copyInput.replace(/\s/g, '').length > 12) throw new Error('[ERROR]: 입력값은 공백 제외 12글자여야합니다.');
    if (todoList.includes(input)) throw new Error('[ERROR]: 이미 등록한 투두입니다.');
    return input;
  }
}
