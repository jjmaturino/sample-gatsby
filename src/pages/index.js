/*
  Author: Juan Maturino
  Date: 12/05/2020

  Title: Dashboard
  Description: This file holds the structure of the main dashboard of Edua
 */

import React, { useState } from "react"
import { Router, Redirect } from "@reach/router"

import Layout from "../components/layouts/layout"
import SEO from "../components/layouts/seo"

import Dashboard from "../components/sections/dashboard"
import PrivateRoute from "../utils/private_routes"
import LoginPage from "../components/sections/login"
import Login from "../utils/Login"
import SettingsPage from "../components/sections/settings"
import AccountPage from "../components/sections/account"
import RegisterPage from "../components/sections/register"

export default function IndexPage() {
  return (
    <div>
      <Router>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/settings" component={SettingsPage} />
        <PrivateRoute path="/account" component={AccountPage} />
        <Login path="/loginTest" />

        <LoginPage path="/login" />
        <RegisterPage path="/register" />
      </Router>
    </div>
  )
}
