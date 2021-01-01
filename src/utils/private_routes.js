/*
  Author: Gatsby
  Date: 12/08/2020

  Title: Private Routes
  Description: This component checks to see if user has the authority to access
               client-only routes
 */

import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "./auth.js"
import { Router } from "@reach/router"

export default function PrivateRoute({
  component: Component,
  location,
  ...rest
}) {
  if (!isLoggedIn() && location.pathname !== `/login`) {
    navigate("/login")
    return null
  }
  return <Component {...rest} />
}

const Private = ({ component: Component, ...rest }) => {
  if (window.location.pathname !== `/login`) {
    // If we’re not logged in, redirect to the home page.
    navigate(`/app/login`)
    return null
  }
  return (
    <Router>
      <Component {...rest} />
    </Router>
  )
}
