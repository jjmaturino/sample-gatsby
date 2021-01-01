/*
  Author: Juan Maturino
  Date:   11/24/2020

  Title: Login Page
  Description: Displays the login form
 */

import React from "react"
import styled from "styled-components"
import { H3 } from "../styles/text_styles"
import SEO from "../layouts/seo"
import SchoolTeacher from "../../assets/illustrations/SchoolTeacherBlackboard.svg"
import SignupForm from "../forms/sign_up_form"
import { isLoggedIn } from "../../utils/auth"
import { navigate } from "gatsby"

export default function RegisterPage({ data }) {
  return (
    <Container>
      <SEO title="Log In" />
      <ContentWrapper>
        <ImgWrapper>
          <Title>Sign In</Title>
          <VectorImageOne src={SchoolTeacher} alt="School Teacher" />
        </ImgWrapper>

        <FormWrapper>
          <SignupForm />
        </FormWrapper>
      </ContentWrapper>
    </Container>
  )
}

// STYLED COMPONENTS

const Container = styled.div`
  display: grid;
  overflow: hidden;

  background: rgba(33, 44, 79, 0.8);
  height: 100vh;
  min-height: 900px;

  @media (max-width: 660px) {
    min-height: 1100px;
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 140px auto 0 auto;

  display: grid;
  grid-template-columns: 470px 400px;

  @media (max-width: 980px) {
    margin: 140px auto 0 auto;
    max-width: 660px;
    grid-template-columns: 40% 40%;
  }

  @media (max-width: 660px) {
    margin: 0 auto 0 auto;
    grid-template-columns: 100%;
  }
`

const FormWrapper = styled.div`
  width: 420px;
  height: 700px;
  background: rgba(240, 243, 245, 1);
  border-radius: 20px;

  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  position: relative;

  @media (max-width: 980px) {
    width: 380px;
    height: 670px;
  }

  @media (max-width: 390px) {
    width: 360px;
  }

  @media (max-width: 360px) {
    width: 320px;
  }

  @media (max-width: 319px) {
    width: 280px;
  }
  @media (max-width: 290px) {
    margin: 0;
  }
`

const VectorImageOne = styled.img`
  margin: 20px 0 0 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);

  width: 500px;
  padding: 20px;
  background: #22b88e;
  border-radius: 20px;

  @media (max-width: 980px) {
    width: 320px;
    padding: 0;
  }

  @media (max-width: 660px) {
    background: none;
    box-shadow: none;
    margin: 0 auto;
    padding: 0;

    width: 320px;
  }

  @media (max-width: 315px) {
    background: none;
    box-shadow: none;
    margin: 0 auto;
    padding: 0;
    width: 300px;
  }
`

const ImgWrapper = styled.div`
  text-align: center;
  margin: 20px 0 0 0;

  color: white;
  @media (max-width: 660px) {
    margin: 0;
  }
`

const Title = styled(H3)`
  @media (max-width: 660px) {
    position: relative;
    font-size: 28px;

    bottom: -290px;
    left: -14px;
  }
  @media (max-width: 315px) {
    font-size: 24px;
    bottom: -280px;
    left: -14px;
  }
`

// GRAPHQL DATA
