/*
  Author: Juan Maturino
  Date: 12/05/2020


  Title: Menu Button
  Description: Button Structure for a stateful menu button component
 */

import React, { useState } from "react"
import Link from "gatsby-link"
import styled from "styled-components"

// Function component
export default function MenuButton(props) {
  const [link, title, image, imageAlt] = props
  return (
    <Button>
      <Link
        to={props.link}
        style={ButtonStyle}
        activeStyle={ActiveButtonStyle}
        activeClassName="active"
      >
        <Text>{props.title}</Text>
        <Image src={props.image} alt={props.imageAlt} />
      </Link>
    </Button>
  )
}

// css components
const ButtonStyle = {
  width: "230px",
  height: "58px",
  padding: " 0 16px",
  borderRadius: "16px",

  display: "grid",
  gridTemplateColumns: "85% 10%",
  alignItems: "center",
}

const ActiveButtonStyle = {
  background: "#262628",
}

// Styled Components
const Button = styled.div`
  .active {
    a {
      color: white !important;
    }
  }
`

const Text = styled.a`
  color: #9593a0;
  font-size: 16px;
  line-height: 2;
  font-weight: 500;
`

const Image = styled.img`
  width: 24px;
`
