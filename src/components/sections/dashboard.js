/*
  Author: Juan Maturino
  Date: 12/05/2020

  Title: Dashboard
  Description: This file holds the structure of the main dashboard of Edua
 */

import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../layouts/layout"
import Image from "../image"
import SEO from "../layouts/seo"
import { Caption, H1, H2 } from "../styles/text_styles"
import CourseCard from "../cards/course_card"
import cardBackground from "../../assets/backgrounds/BackgroundCard.jpg"
import cardLogo from "../../assets/icons/SquareRoot.svg"
import LivestreamModal from "../modals/livestream_modal"
import { useTransition, animated } from "react-spring"
import ModalOverlay from "../modals/modal_overlay"

export default function Dashboard() {
  // Declare a new state variable, which we'll call "count"
  const [background, setBackground] = useState(null)
  const [subject, setSubject] = useState(null)
  const [topic, setTopic] = useState(null)
  const [livestreamUrl, setLiveStreamUrl] = useState(null)
  const [overview, setOverview] = useState(null)

  // State for our modal
  const [showMenu, setShowMenu] = useState(false)

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" },
  })

  function HandleModal(e) {
    setShowMenu(!showMenu)
  }

  return (
    <Layout>
      <SEO title="Dashboard" />
      <Wrapper>
        {maskTransitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props} className="animated-div">
                <ModalOverlay />️
                <LivestreamModal showMenu={setShowMenu} />️
              </animated.div>
            )
        )}

        <Header>
          <FirstRow>
            <HeaderTextWrapper>
              <WelcomeText>Hello, Juan</WelcomeText>
              <WelcomeCaption>Welcome back!</WelcomeCaption>
            </HeaderTextWrapper>
          </FirstRow>

          <SecondRow>
            <LivestreamText>Upcoming Livestreams</LivestreamText>
          </SecondRow>
        </Header>
        <LivestreamWrapper>
          <HorizontalScroll className="full" onClick={HandleModal}>
            <CourseCard
              background={cardBackground}
              subject="Calculus"
              topic="Optimizations"
              logo={cardLogo}
            />
            <CourseCard
              background={cardBackground}
              subject="Calculus"
              topic="Optimizations"
              logo={cardLogo}
            />
          </HorizontalScroll>
        </LivestreamWrapper>
      </Wrapper>
    </Layout>
  )
}

// Styled Components
const Wrapper = styled.div`
  .animated-div {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .close-button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 1200px;
    z-index: 11;
    cursor: pointer;
  }
`

const Header = styled.div`
  max-width: 640px;
  margin: 48px 0 0 48px;
`

const FirstRow = styled.div`
  margin: 0 0 37px 0;
`

const SecondRow = styled.div``

const LivestreamWrapper = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr 20px;
  > * {
    grid-column: 2 / -2;
  }

  > .full {
    grid-column: 1 / -1;
  }
`

const HorizontalScroll = styled.div`
  display: grid;

  grid-gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 320px;

  :after {
    content: "";
    width: 10px;
  }

  padding: 48px 20px 60px 48px;
  overflow-x: auto;
  scroll-snap-type: x proximity;

  scrollbar-width: thin; /* "auto" or "thin"  */

  /* width */
  ::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px grey;
    border-radius: 0px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #262628;
    border-radius: 10px;
  }
`

const HeaderTextWrapper = styled.div`
  display: grid;
  grid-gap: 12px 0;
`

const WelcomeText = styled(H2)`
  color: #262628;
  font-weight: 700;
  font-size: 48px;
`

const WelcomeCaption = styled(Caption)`
  color: #bab9c1;
  font-weight: 400;
  font-size: 17px;
`

const LivestreamText = styled(H2)`
  color: #454ade;
  font-size: 30px;
  font-weight: 700;
`
