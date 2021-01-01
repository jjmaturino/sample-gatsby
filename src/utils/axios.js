/*
  Author: Juan Maturino
  Date:   12/12/2020

  Title: Axios API Call
  Description: This file handle calls to edua's api
 */

import axios from "axios"

const baseURL = "http://localhost:8000/api/"

// Make Axios play nice with Django CSRF
axios.defaults.xsrfCookieName = "csrftoken"
axios.defaults.xsrfHeaderName = "X-CSRFToken"

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Token " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    "X-CSRFToken": "csrfToken",
    accept: "application/json",
  },
})

export default axiosInstance
