import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/hero"
import LatestProjects from "../components/latestProjects"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero content={data.hero.edges[0].node} />
      <LatestProjects />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            greetings
            emoji
            subtitlePrefix
            subtitleHighlight
          }
          rawMarkdownBody
        }
      }
    }
  }
`