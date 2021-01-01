/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "../header"
import "./layout.css"
import Sidebar from "../sections/sidebar"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <SiteContainer>
      <Sidebar />
      <main>{children}</main>
    </SiteContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// Styled Components
const SiteContainer = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`
