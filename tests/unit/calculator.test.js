import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App', () => {
  test('operands input test', () => {
    const wrapper = mount(App);

    const op1Input = wrapper.find('input[name = "op1"]');
    op1Input.setValue(2);
    expect(wrapper.vm.operand_1).toBe(2);

    const op2Input = wrapper.find('input[name = "op2"]');
    op2Input.setValue(3);
    expect(wrapper.vm.operand_2).toBe(3);
  });

  test('operands computational operations test', () => {
    const wrapper = mount(App);
    const equalsBut = wrapper.find('button[name = "="]');
    const sumBut = wrapper.find('button[name = "+"]');
    const diffBut = wrapper.find('button[name = "-"]');
    const multBut = wrapper.find('button[name = "*"]');
    const divBut = wrapper.find('button[name = "/"]');
    const expBut = wrapper.find('button[name = "**"]');
    const intBut = wrapper.find('button[name = "%"]');


    const op1Input = wrapper.find('input[name = "op1"]');
    op1Input.setValue(2);
    const op2Input = wrapper.find('input[name = "op2"]');
    op2Input.setValue(3);

    // sum
    sumBut.trigger('click');
    equalsBut.trigger('click');
    expect(wrapper.vm.result).toBe(5);

    // difference
    diffBut.trigger('click');
    equalsBut.trigger('click');
    expect(wrapper.vm.result).toBe(-1);

    // multiplication
    multBut.trigger('click');
    equalsBut.trigger('click');
    expect(wrapper.vm.result).toBe(6);

    // division
    divBut.trigger('click');
    equalsBut.trigger('click');
    expect(wrapper.vm.result).toBe(0.6666666666666666);

    // exponentiation
    expBut.trigger('click');
    equalsBut.trigger('click');
    expect(wrapper.vm.result).toBe(8);

    // integer division
    intBut.trigger('click');
    equalsBut.trigger('click');
    expect(wrapper.vm.result).toBe(2);
  });

  test('operands div by zero test', () => {
    const wrapper = mount(App);

    const op1Input = wrapper.find('input[name = "op1"]');
    op1Input.setValue(2);
    const op2Input = wrapper.find('input[name = "op2"]');
    op2Input.setValue(0);

    const sumBut = wrapper.find('button[name = "/"]');
    sumBut.trigger('click');
    const equalsBut = wrapper.find('button[name = "="]');
    equalsBut.trigger('click');

    expect(wrapper.vm.error).toBe('на ноль делить нельзя');
  });

  test('checkbox', () => {
    const wrapper = mount(App);

    const checkInput = wrapper.find('input[id = "checkbox"]');

    checkInput.setChecked(true);
    expect(wrapper.vm.checked).toBe(true);

    checkInput.trigger('click');
    expect(wrapper.vm.checked).toBe(true);
  });

  // test('radioButton', () => {
  //   const wrapper = mount(App);

  //   const radioButOne = wrapper.find('input[id = "one"]');
  //   radioButOne.trigger('change');
  //   expect(wrapper.vm.checked).toBe('one');

  //   const radioButTwo = wrapper.find('input[id = "two"]');
  //   radioButTwo.trigger('change');
  //   expect(wrapper.vm.checked).toBe('two');
  // });
});



