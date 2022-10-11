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

  test('operands add test', () => {
    const wrapper = mount(App);

    const op1Input = wrapper.find('input[name = "op1"]');
    op1Input.setValue(2);
    const op2Input = wrapper.find('input[name = "op2"]');
    op2Input.setValue(3);

    const sumBut = wrapper.find('button[name = "+"]');
    sumBut.trigger('click');
    const equalsBut = wrapper.find('button[name = "="]');
    equalsBut.trigger('click');

    expect(wrapper.vm.result).toBe(5);
  });

  test('operands div test', () => {
    const wrapper = mount(App);

    const op1Input = wrapper.find('input[name = "op1"]');
    op1Input.setValue(3);
    const op2Input = wrapper.find('input[name = "op2"]');
    op2Input.setValue(2);

    const sumBut = wrapper.find('button[name = "/"]');
    sumBut.trigger('click');
    const equalsBut = wrapper.find('button[name = "="]');
    equalsBut.trigger('click');

    expect(wrapper.vm.result).toBe(1.5);
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
})

