import {
  reactive,
  computed,
  toRefs
} from 'vue';

import axios from 'axios';

const plusCalculator = () => {
  let state = reactive({
    num1: 0,
    num2: 0,
    result: computed(() => parseInt(state.num1) + parseInt(state.num2))
  });

  return toRefs(state);
};


const api = async (url, method, data) => {
  return (await axios({
    method: method,
    url,
    data
  }).catch(e => {
    console.log(e);
  })).data;
}

export {
  plusCalculator,
  api
};