import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default props => (
  <Layout>
    <div>
      <h1>Contact Me</h1>
      <p>Let's keep in touch</p>
      <Link to="/about">Go to the About Me Page</Link>
      <Link to="/">Go Back Home</Link>
      <a href="mailto:daniel@danieljs.io">daniel@danieljs.io</a>
    </div>
  </Layout>
)
