export const isBrowser = () => typeof window !== "undefined"

export const isLoggedIn = () => {
  return !!localStorage.getItem("access_token")
}

export const logout = callback => {
  localStorage.setItem("access_token", "")
  callback()
}
