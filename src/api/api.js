import axios from 'axios';

export let instance = axios.create({
  baseURL: 'https://vexel-group.oa.r.appspot.com/api/',
});
