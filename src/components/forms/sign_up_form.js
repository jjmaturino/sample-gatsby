/*
  Author: Juan Maturino
  Date: 11/23/2020

  Title: Sign In Form
  Description: Functional Component that displays and calls out to rest-api for
               authentication
 */

import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

import { useForm } from "react-hook-form"
import { BodyIntro, Caption, H3 } from "../styles/text_styles"
import axiosInstance from "../../utils/axios"
import { navigate } from "gatsby"

export default function SignupForm() {
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => {
    console.log(data)

    axiosInstance
      .post(`v1/users/`, {
        email: data.email,
        password: data.password,
        first_name: data.first_name,
        last_name: data.last_name,
      })
      .then(res => {
        console.log(res)
        console.log(res.data)
        navigate(`/dashboard`)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  console.log(errors)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <FormWrapper>
      <Title>Create your Edua account</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <label htmlFor="email">School Email:</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={register({ required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>Please enter a valid school email</p>}
        </div>
        <div className="row">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            placeholder="First Name"
            name="first_name"
            ref={register({ required: true, maxLength: 80 })}
          />
        </div>
        <div className="row">
          <label htmlFor="last_name">Last Name:</label>

          <input
            type="text"
            placeholder="Last Name"
            name="last_name"
            ref={register({ required: true, maxLength: 100 })}
          />
        </div>
        <div className="row">
          <label htmlFor="Password">Password:</label>

          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({
              required: true,
              maxLength: 100,
              minLength: { value: 8, message: "Must be 8 chars" },
              validate: value => {
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(pattern =>
                    pattern.test(value)
                  ) ||
                  "must include lower, upper, number, and special character."
                )
              },
            })}
          />
        </div>

        <SubmitButton type="submit">Create Account</SubmitButton>
      </form>
      <div className="SignInPrompt">
        <p>
          Have an Account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </FormWrapper>
  )
}

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

  a {
    transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  a:hover {
    transform: translateY(-3px);
    cursor: pointer;
  }

  .SignInPrompt {
    display: block;
    width: 260px;
    margin: 20px 0 0 0;
    text-align: center;
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
