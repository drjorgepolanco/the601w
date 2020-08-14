import axios from 'axios';
import { backendUrl } from '../config';

export const api = axios.create({
  baseURL: `${backendUrl}/wp-json`
});