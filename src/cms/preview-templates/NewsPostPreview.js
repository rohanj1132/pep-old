import React from 'react'
import PropTypes from 'prop-types'
import { NewsPageTemplate } from '../../templates/news-page'

const NewsPostPreview = ({ entry, getAsset, widgetFor }) => {

  return (
    <NewsPageTemplate
      image={getAsset(entry.getIn(['data', 'featuredimage']))}
      title={entry.getIn(['data', 'title'])}
      shortbody={entry.getIn(['data', 'shortbody'])}
      longbody={widgetFor('body')}
      source={entry.getIn(['data', 'source'])}
    />
  )
}

NewsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default NewsPostPreview
