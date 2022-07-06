import 'querystring'
// import jwtDecode from 'jwt-decode'
import http from '../httpService'
import {api} from '../../config.js'
import axios from 'axios'
const querystring = require('querystring')

const apiEndpoint = api.apiUrl + '/login'

export async function login(email, password) {
  console.log(apiEndpoint, api.apiUrl)
  let response = await axios.post(apiEndpoint,{username: email,password: password})

  // const response = await http.post(
  //   apiEndpoint,
  //   querystring.stringify({
  //     username: email,
  //     password: password,
  //     grant_type: 'password',
  //   }),
  //   {
  //     auth: {
  //       username: auth_username,
  //       password: auth_password,
  //     },
  //   },
  // )
  // const data = response.data
  return response
}

function loginWithJwt(token) {

  localStorage.setItem('token', token)
  // localStorage.setItem('refresh_token', refresh_token)

}

function setForcePassword(force_change) {
  localStorage.setItem('force_change',force_change)
}

export function setCurrentUser(user) {
  localStorage.setItem('user',user)
}


export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem('token')
    const user = localStorage.getItem('user')


    return user
  } catch (ex) {
    return null
  }
}

export function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  // localStorage.removeItem('force_change')
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
  setForcePassword,
  getForcePassword,
}
