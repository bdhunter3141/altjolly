import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {withTheme} from '../theme/withTheme'

const Header = ({ siteTitle, themeContext }) => {

  return(
  <header
    style={{
      background: 'transparent',
      paddingBottom: themeContext.spacing[2],
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: themeContext.maxPageWidth,
        padding: `${themeContext.spacing[2]} ${themeContext.spacing[1]}`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: themeContext.color.white,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)
        }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withTheme(Header)
