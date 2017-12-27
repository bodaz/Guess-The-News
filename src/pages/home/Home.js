import React, { Component } from "react";

import "./Home.css";
import { Card, Filter } from "../../components";

function titleStringToArray(title) {
  return title
    .toUpperCase()
    .replace(/[\W_]+/g, " ")
    .trim()
    .split(" ");
}

const LoadingMessage = () => <h2>Loading articles...</h2>;

const FetchErrorMessage = () => (
  <div>
    <h2>Error loading articles...</h2>
    <h2>Try again later.</h2>
  </div>
);

class Home extends Component {
  state = {
    category: "technology",
    language: "en",
    articles: [],
    loading: true,
    fetchError: false
  };

  // setState() with updater to refetch articles
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
            articles: data.articles.slice(0, 30),
            loading: false
          });
        });
      })
      .catch(error => {
        console.log("Request failed", error);
        this.setState({
          fetchError: true,
          loading: false
        });
      });
  };

  componentDidMount() {
    this.fetchArticles();
  }

  render() {
    const { articles, category, language, loading, fetchError } = this.state;

    return (
      <div className="home">
        <Filter
          onFilterChange={this.onFilterChange}
          category={category}
          language={language}
        />

        <div className="home-main">
          <div className="home-messages">
            {fetchError && <FetchErrorMessage />}
            {loading && <LoadingMessage />}
          </div>

          <div className="grid-container">
            {articles.length > 0 &&
              articles.map((article, index) => {
                return (
                  <Card
                    key={index}
                    article={article}
                    titleAsArray={titleStringToArray(article.title)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
