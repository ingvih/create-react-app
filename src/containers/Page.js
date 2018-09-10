import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Page extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Page</title>
          <meta property="og:url" content="https://ingvirafn.net/page" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Page" />
          <meta property="og:description" content="This is a sub page" />
          <meta property="og:image" content="https://picsum.photos/300/200" />
        </Helmet>
        <h2>Page</h2>
        <p>This is a subpage.</p>
      </div>
    )
  }
}

export default Page