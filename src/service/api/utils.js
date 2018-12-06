import axios from 'axios';

import { host, port } from './config';

const token = {};

export default function ({
  path = '',
  method = 'post',
  params = {},
  isRequireToken = false,
}) {
  return axios({
    method,
    url: `http://${host}:${port}${path}`,
    params: isRequireToken ? { ...params, ...token } : params,
  })
    .catch((err) => { window.console.log(err); });
}
