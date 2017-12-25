import React, { Component } from "react";

import "./Home.css";
import { Card, Header } from "../../components";

class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${
        process.env.REACT_APP_NEWS_API_KEY
      }`
    )
      .then(response => {
        if (response.status !== 200) {
          console.log("Error! Status code: " + response.status);
          return;
        }

        response.json().then(data => {
          this.setState({
            articles: data.articles
          });
        });
      })
      .catch(error => {
        console.log("Request failed", error);
      });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className="home" id="home">
        <Header />
        <div className="grid-container">
          {articles.length > 0 &&
            articles.map((article, index) => (
              <Card key={index} article={article} />
            ))}
        </div>
      </div>
    );
  }
}

export default Home;
