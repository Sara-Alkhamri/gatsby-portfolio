import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>Sara Alkhamri</h1>
      <Link
          to="/work"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
        Work
          {siteTitle}
        </Link>
      <Link
          to="/contact"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
        Contact
          {siteTitle}
        </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
