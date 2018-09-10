import React, { Component } from "react";
import { Helmet } from "react-helmet";

class News extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>News</title>
          <meta property="og:url" content="https://ingvirafn.net/news" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="News" />
          <meta property="og:description" content="This is the news site." />
          <meta property="og:image" content="https://picsum.photos/300/200" />
        </Helmet>
        <h2>News</h2>
        <p>
          Hello React. Lorem ipsum dolor sit amet, duo vidit ullamcorper eu, mollis utroque vis ne,
          fugit nominavi scripserit ex vim. Assum quaerendum delicatissimi vix id, nobis iisque vim ad,
          commodo consetetur incorrupte et quo. No per magna inermis neglegentur, ius elit accusata maluisset
          an, quo posse viris an. Sed ad fabulas utroque repudiandae, eu sit pertinax delicata, postulant efficiantur
          vis cu. Id cum commodo definitiones.
        </p>
      </div>
    );
  }
}

export default News;