import axios from "axios";
import { globalStore } from "..";

export const globalAxios = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  timeout: 30000,
  withCredentials: false,
  headers: { "Content-Type": "application/json" },
  credentials: "Access-Control-Allow-Credentials",
});

export function axiosGet({ url, body = {}, header = {}, user = undefined }) {
  return new Promise((resolve, reject) => {

    //when using state managment
    // const { user } = globalStore.getState();
    
    let config = {};
    if (user) {
      config = {
        headers: {
          "jwt-token": user.token || "",
          "Content-Type": "application/json",
          ...header,
        },
      };
    }
    globalAxios
      .get(url, body, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function axiosPost({url, body = {}, header = {},user={}}) {
    return new Promise((resolve, reject) => {
    //   const { user } = globalStore.getState();
      let config = {};
      if (user) {
        config = {
          headers: {
            'jwt-token': user.token || '',
            'Content-Type': 'application/json',
            ...header,
          },
        };
      }
      globalAxios.post(url, body, config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  
