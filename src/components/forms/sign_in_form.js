/*
  Author: Juan Maturino
  Date: 11/23/2020

  Title: Sign In Form
  Description: Functional Component that displays and calls out to rest-api for
               authentication
 */

import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import { useForm } from "react-hook-form"
import { Caption } from "../styles/text_styles"
import axiosInstance from "../../utils/axios"
import { isLoggedIn } from "../../utils/auth"
import { navigate } from "gatsby"

export default function SignInForm() {
  const { register, handleSubmit, watch, errors } = useForm()

  // To check if it's in a state of submitting
  const [submitting, setSubmitting] = useState(false)
  const [serverErrors, setServerErrors] = useState([])

  const onSubmit = data => {
    setSubmitting(true)
    setServerErrors([])
    console.log(data)

    axiosInstance
      .post(`v1/api-token-auth/`, {
        username: data.email,
        password: data.password,
      })
      .then(res => {
        localStorage.setItem("access_token", res.data.token)
        axiosInstance.defaults.headers["Authorization"] =
          "Token " + localStorage.getItem("access_token")
        navigate(`/dashboard`)
      })
      .catch(function (error) {
        console.log(error)
      })

    setSubmitting(false)
  }

  return (
    <FormWrapper>
      <Title>Sign in to your account</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">School Email:</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            ref={register({ required: "required", pattern: /^\S+@\S+$/i })}
          />
        </div>

        <div>
          <PasswordLabelRow>
            <label htmlFor="Password">Password:</label>
            <a>Forgot your password?</a>
          </PasswordLabelRow>
          <input
            type="password"
            placeholder="password"
            name="password"
            ref={register({
              required: true,

              maxLength: 80,
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <SubmitButton type="submit" disabled={submitting}>
          Log In
        </SubmitButton>
      </form>
      <div className="SignInPrompt">
        <p>
          Don't have an account? <Link to="/register">Sign up</Link>
        </p>
      </div>
    </FormWrapper>
  )
}

// STYLED COMPONENTS

const FormWrapper = styled.div`
  margin: 0 auto;
  width: 300px;
  padding: 60px 0 0 0;
  form {
    display: grid;
    grid-template-columns: auto;

    gap: 20px 0;
  }

  input {
    max-width: 300px;
    font-size: 20px;
    font-weight: 400;
    color: #454ade;
    background: #ffffff;
    width: 90%;
    height: 50px;
    padding: 0 0 0 20px;

    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 8px;
    outline: none;
  }

  label {
    display: block;
    margin: 0 0 10px 0;
  }

  .SignInPrompt {
    display: block;
    width: 260px;
    margin: 20px 0 0 0;
    text-align: center;
  }

  a {
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  a:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }

  @media (max-width: 319px) {
    width: 280px;
    margin: 0 auto 0 10px;

    input {
      max-width: 85%;
    }
  }
`

const SubmitButton = styled.button`
  margin: 40px 0 0 0;
  width: 260px;
  height: 60px;
  font-size: 24px;
  background: #454ade linear-gradient(150deg, #3672f8, #454ade);
  border: none;
  font-weight: 700;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.25);
  color: white;

  display: grid;
  align-items: center;
  justify-items: center;

  :hover {
    color: white;
    background: #3672f8;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.25);

    transform: translateY(-3px);
  }
`

const Title = styled(Caption)`
  position: relative;
  top: -35px;
  left: 0px;

  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0.05em;
  width: 340px;

  @media (max-width: 390px) {
    width: 330px;
  }

  @media (max-width: 360px) {
    font-size: 22px;
    width: 310px;
  }

  @media (max-width: 319px) {
    width: 260px;
  }
`

const PasswordLabelRow = styled.div`
  display: grid;
  grid-template-columns: 36% 60%;

  @media (max-width: 319px) {
    grid-template-columns: 33% 70%;
  }
`

// END STYLED COMPONENTS
