/*
  Author: Juan Maturino
  Date:   12/7/2020

  Title: Small Circular Button
  Description: Small Circular Button Component with a svg or png image passed
                as a prop
 */
import React from "react"
import styled from "styled-components"

export default function CircleButton(props) {
  return (
    <Button>
      <img src={props.icon} alt={props.alt} />
    </Button>
  )
}

const Button = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background: #f0f3f5;
  font-size: 28px;
  font-weight: bold;
  justify-content: center;
  align-content: center;
  z-index: 11;
  cursor: pointer;
`
