import axios from 'axios';

export default {
  mounted() {
    console.log('믹스인 mounted');
  },
  unmounted() {
    console.log('믹스인 unmounted');
  },
  methods: {
    async $callAPI(url, method, data) {
      return (await axios({
        method: method,
        url,
        data
      }).catch(e => {
        console.log(e);
      })).data;
    }
  }
}