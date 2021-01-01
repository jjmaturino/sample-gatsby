/*
  Author: Juan Maturino
  Date:   12/08/2020

  Title: Livestream Modal
  Description: Modal that opens when a user clicks on a course card to watch a
               livestream
 */

import React from "react"
import styled from "styled-components"

export default function ModalOverlay() {
  return <Overlay></Overlay>
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(20, 20, 20, 0.6);
  z-index: 2;
`
