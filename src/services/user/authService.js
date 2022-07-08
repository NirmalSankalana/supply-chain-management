import 'querystring'
// import jwtDecode from 'jwt-decode'
import {useHistory } from "react-router-dom";
import http from '../httpService'
import {api} from '../../config.js'
import axios from 'axios'




const apiLoginEndpoint = api.apiUrl + '/login'
const apiLogoutEndpoint = api.apiUrl + '/logout'

export async function login(email, password) {  
  //console.log(apiEndpoint, api.apiUrl)
  let response = await axios.post(apiLoginEndpoint,{username: email,password: password})
  return response
}

function loginWithJwt(token) {
  localStorage.setItem('token', token)
}

export function setCurrentUser(user) {
  localStorage.setItem('user',JSON.stringify(user))
}


export function getCurrentUser() {
  
  try {
    const user = localStorage.getItem('user')
    if(user)
      return JSON.parse(user)
    
  } catch (ex) {
    return null
  }
}

export async function logout() {
  // let response = await axios.post(apiLogoutEndpoint)
  try{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }catch(e){
    console.log(e)
  }
}

export function getJwt() {
  return localStorage.getItem('token')
}

export function getForcePassword() {
  return localStorage.getItem('force_change')
}

export function getUserRole() {
  const user = getCurrentUser()
  return user.role
}



export default {
  login,
  loginWithJwt,
  setCurrentUser,
  getCurrentUser,
  logout,
  getJwt,
  getUserRole,
  getForcePassword,
}
