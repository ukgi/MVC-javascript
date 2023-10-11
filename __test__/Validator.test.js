import Validator from '../utils/Validator.js';

describe('유저 입력값 유효성검사', () => {
  it('입력값이 공백 제외 12글자 미만이어야합니다', () => {
    expect(() => {
      Validator.validateUserInput('').toThrowError('[ERROR]: 입력값을 입력해주세요');
    });
  });

  it('입력값이 공백 제외 12글자 미만이어야합니다', () => {
    expect(() => {
      Validator.validateUserInput('입력값이 공백 제외 12글자 미만이어야합니다').toThrowError(
        '[ERROR]: 입력값은 공백 제외 12글자여야합니다.'
      );
    });
  });

  it('투두리스트에 중복이 있으면 안됩니다.', () => {
    const todoList = ['공부하기', '운동하기'];
    expect(() => {
      Validator.validateUserInput('공부하기', todoList).toThrowError('[ERROR]: 이미 등록한 투두입니다.');
    });
  });
});
