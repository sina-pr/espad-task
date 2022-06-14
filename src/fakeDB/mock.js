import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { BASE_URL } from '../configs/constantApi';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const instance = axios.create({
  baseURL: BASE_URL,
  headers,
});

const mock = new MockAdapter(instance);

export default mock;
