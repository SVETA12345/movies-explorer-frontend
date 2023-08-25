
import { useState, useEffect } from "react";
import ServerError from "../components/ServerError/ServerError";
export const BASE_URL = 'https://api.movies-explorer.nomoreparties.co';

function getResponseData(res) {
    console.log(res)
  if (res.ok) {
      return res.json();
  }
  return Promise.reject({status: res.status});
}

export const register = ( password, email, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({ password, email, name})
  })
  .then((response) => {
      return getResponseData(response)
    
  })
}; 

export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
      withCredentials: true,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({password,email})
    })
    .then((response) => {
      console.log(response) 
      return getResponseData(response)
    })
    .then((data) => {
      
      if (data.token){
        console.log('data_1',data)
        return data;
      }
    })
  }; 

  // получение данных пользователя
  export const getContent = () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
    .then((res) => {
      return getResponseData(res) 
    })
    .then(data => data)
  } 