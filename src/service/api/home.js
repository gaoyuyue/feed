import req from './utils';
import axios from "axios";
import {host, port} from "./config";

// const parentPath = '/home';
const parentPath = '';

export function getList() {
  return req({
    method: "get",
    path: `${parentPath}/list`,
  });
}

export function addFeedItem(text) {
  return axios({
    method: "post",
    url: `http://${host}:${port}/add_one`,
    contentType: "application/x-www-form-urlencoded",
    data: "content="+text,
  })
    .catch((err) => { window.console.log(err); });
}

export function deleteOne(id) {
  return axios({
    method: "delete",
    url: `http://${host}:${port}/delete_one?id=`+id,
  })
    .catch((err) => { window.console.log(err); });
}

export function updateOne({ id, text }) {
  return axios({
    method: "put",
    url: `http://${host}:${port}/update_one`,
    contentType: "application/x-www-form-urlencoded",
    data: "id="+id+"&content="+text,
  })
    .catch((err) => { window.console.log(err); });
}
