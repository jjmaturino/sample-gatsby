/*
  Author: Juan Maturino
  Date:   12/08/2020

  Title: Livestream Modal
  Description: Modal that opens when a user clicks on a course card to watch a
               livestream
 */

import React, { useEffect, useState } from "react"
import videojs from "video.js"
import awsvideoconfig from "../../aws-video-exports"
import "video.js/dist/video-js.css"

import styled from "styled-components"
import { BodyIntro, BodyMain, H3, H4 } from "../styles/text_styles"
import CircleButton from "../buttons/circle_button"
import closeIcon from "../../assets/icons/icon-close-black.svg"

class VideoPlayer extends React.Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props)
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <>
        <div
          data-vjs-player
          style={{
            width: 960,
            height: 540,
          }}
        >
          <video
            ref={node => {
              this.videoNode = node
            }}
            className="video-js"
          />
        </div>
      </>
    )
  }
}

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: awsvideoconfig.awsOutputLiveLL,
    },
  ],
}

export default function LivestreamModal(props) {
  function closeMenu() {
    props.showMenu(false)
  }

  return (
    <ModalOverlay>
      <ModalWrapper>
        <Modal>
          <div onClick={closeMenu}>
            <CircleButton icon={closeIcon} alt="Close Button" />
          </div>

          <HeaderTextWrapper>
            <Subject>Calculus</Subject>
            <Topic>Optimizations</Topic>
          </HeaderTextWrapper>
          <LivestreamRow>
            <LivestreamPlayer>
              <VideoPlayer {...videoJsOptions} />
            </LivestreamPlayer>
            <InteractiveSection></InteractiveSection>
          </LivestreamRow>
          <OverviewRow>
            <OverView>
              <OverviewHeader></OverviewHeader>
              <OverviewBody></OverviewBody>
            </OverView>
          </OverviewRow>
        </Modal>
      </ModalWrapper>
    </ModalOverlay>
  )
}

// Styled Components

const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(20, 20, 20, 0.6);
  z-index: 2;
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  z-index: 2;
`

const Modal = styled.div`
  position: relative;
  margin: 1.75rem auto 0 auto;
  border-radius: 16px;
  width: 90%;
  max-width: 1300px;
  padding: 1rem;

  background: rgba(3, 13, 36, 0.9);

  /* if backdrop support: very transparent and blurred */
  @supports (
    (-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))
  ) {
    background-color: rgba(3, 13, 36, 0.8);
    -webkit-backdrop-filter: blur(1em);
    backdrop-filter: blur(1em);
  }
`

const HeaderTextWrapper = styled.div`
  margin: 36px 0 80px 90px;
`

const Subject = styled(H3)`
  font-size: 36px;
  font-weight: 700;
  color: white;
`

const Topic = styled(BodyIntro)`
  font-size: 22px;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
`

const LivestreamRow = styled.div`
  margin: 0 0 50px 90px;
  width: auto;
  display: grid;
  grid-template-columns: 65% 35%;
`

const LivestreamPlayer = styled.div`
  width: 100%;
  max-width: 715px;
  height: 460px;
  background: #3913b8;
  border-radius: 24px;
`

const InteractiveSection = styled.div``

const OverviewRow = styled.div`
  margin: 0 0 50px 90px;
  width: auto;
  display: grid;
  grid-template-columns: 65% 35%;
`

const OverView = styled.div`
  width: 100%;
  max-width: 715px;
  height: 460px;
  background: rgba(198, 208, 235, 0.5);
  border-radius: 24px;
`

const OverviewHeader = styled(H4)``

const OverviewBody = styled(BodyMain)``
