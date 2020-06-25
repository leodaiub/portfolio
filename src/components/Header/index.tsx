import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }: Props) => (
  <header>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

interface Props {
  siteTitle?: string
}

export default Header
