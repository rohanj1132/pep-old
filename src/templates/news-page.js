import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { HTMLContent } from '../components/Content'

export const NewsPageTemplate = ({
  image,
  title,
  shortbody,
  longbody,
  source
}) => (
  <div className="content">
    <h2
      className="has-text-weight-bold is-size-1"
      style={{
        boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
        backgroundColor: '#f40',
        color: 'white',
        padding: '1rem',
      }}
    >
      {title}
    </h2>
    <section className="section section--gradient">
      <div className="container">
        <p>{shortbody}</p>
        <HTMLContent content={longbody} />
      </div>
    </section>
  </div>
)

NewsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  shortbody: PropTypes.string,
  longbody: PropTypes.node,
  source: PropTypes.string
}

const NewsPage = ({ data }) => {
  const newsContent = data.markdownRemark;
  const { frontmatter } = newsContent;

  return (
    <Layout>
      <NewsPageTemplate
        longbody={newsContent.html}
        image={frontmatter.featuredimage}
        title={frontmatter.title}
        shortbody={frontmatter.shortbody}
        source={frontmatter.longbody}
      />
    </Layout>
  )
}

NewsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default NewsPage

export const newsPageQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        shortbody
        source
      }
    }
  }
`
