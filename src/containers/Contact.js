import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Contact</title>
          <meta property="og:url" content="https://ingvirafn.net/contact" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Contact" />
          <meta property="og:description" content="This is the contact site" />
          <meta property="og:image" content="https://picsum.photos/300/200" />
        </Helmet>
        <h2>Contact</h2>
      </div>
    )
  }
}

export default Contact