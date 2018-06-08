import axios from 'axios';

export default {
  getCharges: () => axios.get('/charges/retrieve')
};
