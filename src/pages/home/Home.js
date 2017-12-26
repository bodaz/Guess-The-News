import React, { Component } from "react";

import "./Home.css";
import { Card, Filter } from "../../components";

class Home extends Component {
  state = {
    category: "technology",
    language: "en",
    articles: []
  };

  onFilterChange = (name, value) => {
    this.setState(
      {
        [name]: value
      },
      () => {
        this.fetchArticles();
      }
    );
  };

  fetchArticles = () => {
    const { category, language } = this.state;

    const headlinsAddress = "https://newsapi.org/v2/top-headlines";
    const categoryAddress = `?category=${category}`;
    const languageAddress = `&language=${language}`;
    const apiKeyAddress = `&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
    const address = `${headlinsAddress}${categoryAddress}${languageAddress}${apiKeyAddress}`;

    fetch(address)
      .then(response => {
        if (response.status !== 200) {
          console.log("Error! Status code: " + response.status);
          return;
        }

        response.json().then(data => {
          console.log(
            "Articles found: " +
              data.articles.length +
              ". Loading the top 30..."
          );

          this.setState({
            articles: data.articles.slice(0, 30)
          });
        });
      })
      .catch(error => {
        console.log("Request failed", error);
      });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    const { articles, category, language } = this.state;

    return (
      <div className="home">
        <Filter
          onFilterChange={this.onFilterChange}
          category={category}
          language={language}
        />
        <div className="grid-container">
          {articles.length > 0 &&
            articles.map((article, index) => {
              const titleAsArray = article.title
                .toUpperCase()
                .replace(/[\W_]+/g, " ")
                .trim()
                .split(" ");
              return (
                <Card
                  key={index}
                  article={article}
                  titleAsArray={titleAsArray}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Home;
