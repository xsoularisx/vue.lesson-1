<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div class="screen">
      <input type="text" v-model.number="operand_1">
      {{operator}}
      <input type="text" v-model.number="operand_2">
      =
      <input type="text" readonly v-model.number="result">
    </div>
    <div class="error" v-if="error">{{error}}</div>
    <div class="operators">
      <button v-on:click="operator = '+'">+</button>
      <button v-on:click="operator = '-'">-</button>
      <button v-on:click="operator = '*'">*</button>
      <button v-on:click="operator = '/'">/</button>
      <button v-on:click="operator = '**'">**</button>
      <button v-on:click="operator = '%'">%</button>
      <button v-on:click="getResult">=</button>
    </div>
    <form class="checkbox">
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">отобразить экранную клавиатуру</label>
    </form>
    <div v-if="checked" class="numbers">
      <button v-for="(item, index) of numbers" v-bind:key="index" v-on:click="switchOperand(item)">{{item}}</button>
      <button v-on:click="deleteLastNumber">C</button>
      <form class="radio">
        <input type="radio" id="one" value="one" v-model="picked">
        <label for="one">первый операнд</label>
        <input type="radio" id="two" value="two" v-model="picked">
        <label for="two">второй операнд</label>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      operand_1: '',
      operand_2: '',
      operator: '+',
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: 0,
      error: '',
      checked: '',
      picked: '',
    }
  },
  methods: {
    getResult() {
      this.operand_1 = Number(this.operand_1)
      this.operand_2 = Number(this.operand_2)
      this.error = '';
      switch (this.operator) {
        case '+':
          this.result = this.operand_1 + this.operand_2
          break;
        case '-':
          this.result = this.operand_1 - this.operand_2
          break;
        case '*':
          this.result = this.operand_1 * this.operand_2
          break;
        case '/':
          if (this.operand_2 === 0) {
            this.error = 'на ноль делить нельзя'
          } else {
            this.result = this.operand_1 / this.operand_2
          }
          break;
        case '**':
          this.result = this.operand_1 ** this.operand_2
          break;
        case '%':
          this.result = this.operand_1 % this.operand_2
          break;
        default:
          this.result = 'Error'
          break;
      }
    },

    switchOperand(item) {
      if (this.picked === 'one') {
        this.operand_1 += String(item);
      } else if (this.picked === 'two') {
        (this.operand_2 += String(item));
      }
    },

    deleteLastNumber() {
      if (this.operand_1 !== 0 && this.picked === 'one') {
        this.operand_1 = this.operand_1.slice(0, -1)
      } else if (this.operand_2 !== 0 && this.picked === 'two') {
        this.operand_2 = this.operand_2.slice(0, -1);
      }
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .screen {
    margin: 0 auto;
    width: 600px;

    & input {
      width: 150px;
      height: 25px;
      box-sizing: border-box;
    }
  }

  .operators,
  .numbers,
  .checkbox,
  .radio {
    margin: 0 auto;
    width: 600px;
    margin-top: 10px;

    & button {
      width: 25px;
      height: 25px;
      text-align: center;
      margin-right: 5px;
      box-sizing: border-box;
    }
  }

  .error {
    margin: 0 auto;
    margin-top: 10px;
    width: 600px;
    border: 1px solid red;
    color: red;
  }
}
</style>
