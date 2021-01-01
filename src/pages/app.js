import React from "react"
import { Router } from "@reach/router"
import Dashboard from "../components/sections/dashboard"
import SettingsPage from "../components/sections/settings"
import AccountPage from "../components/sections/account"
import Login from "../utils/Login"
import PrivateRoute from "../utils/private_routes"

export default function App() {
  return (
    <Router basepath="/">
      <PrivateRoute path="/app/dashboard" component={Dashboard} />
      <PrivateRoute path="/app/settings" component={SettingsPage} />
      <PrivateRoute path="/app/account" component={AccountPage} />
      <Login path="/app/loginTest" />
    </Router>
  )
}
