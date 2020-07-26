/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ThemeProvider from '../theme/ThemeProvider'
import theme from '../theme/theme'
import useWindowSize from '../hooks/useWindowSize'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const windowSize = useWindowSize()

  // hook for header height
  const [headerHeight, setHeaderHeight] = useState(0)
  useEffect(() => {
    const header = document.getElementsByTagName('header')[0]
    setHeaderHeight(header.offsetHeight)
  }, [windowSize])

  return (
    <ThemeProvider>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: theme.maxPageWidth,
          padding: `${headerHeight}px ${theme.spacing[1]} ${theme.spacing[2]}`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, {data.site.siteMetadata.title}
        </footer>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
