import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta property="og:url" content="https://ingvirafn.net" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Home Title" />
          <meta property="og:description" content="This is the home page" />
          <meta property="og:image" content="https://picsum.photos/400/300" />
        </Helmet>
        <h2>Home</h2>
        <p>This is the home page.</p>
      </div>
    )
  }
}

export default Home