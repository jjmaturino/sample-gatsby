import React, { useState } from "react"
import styled from "styled-components"
import { H3, MediumText } from "../styles/text_styles"

export default function CourseCard(props) {
  const { item } = props

  return (
    <Card className="Card">
      <Background src={props.background} alt="Course Image Background" />
      <Subject>{props.subject}</Subject>
      <Topic className="Topic">{props.topic}</Topic>
      <Logo src={props.logo} alt="Course Logo" />
    </Card>
  )
}

// STYLED COMPONENTS

const Card = styled.div`
  width: 300px;
  height: 225px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  -webkit-border-radius: 12px !important;

  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin: 0 30px 0 0;
  transition: 0.8s cubic-bezier(0.2, 0.82, 0.165, 1);

  @media (max-width: 320px) {
    width: 300px;
  }

  @media (max-width: 300px) {
    width: 270px;
  }

  :hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    transform: translateY(-10px);
  }
`

const Background = styled.img`
  position: absolute; /* Based on relative position of card class */
  top: 0;
  height: 110%;
  z-index: 0;
`

const Logo = styled.img`
  width: 60px;
  position: absolute;
  bottom: 0;
  right: 20px;
  align-self: center;
  transform: translateY(-20px);

  :hover {
    transform: translateY(-20px);
  }
`

const Subject = styled(H3)`
  color: white;
  font-size: 28px;
  margin: 20px 0 0 20px;
  width: 280px;
  z-index: 1;
`

const Topic = styled(MediumText)`
  color: rgba(225, 255, 255, 0.95);
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.075em;
  align-self: end;
  margin: 0 0 20px 20px;
  z-index: 1;

  @media (max-width: 300px) {
    font-size: 14px;
  }
`
