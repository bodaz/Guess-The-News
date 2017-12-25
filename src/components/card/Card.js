import React, { Component } from "react";
import { Input, Button } from "antd";

import "./Card.css";

class Card extends Component {
  state = {
    input: "",
    tries: 3,
    showLink: false,
    showError: false,
    titleAsArray: []
  };

  onInputChange = e => {
    // input string last character can't be space
    if (e.target.value.slice(-1) !== " ") {
      this.setState({
        input: e.target.value
      });
    }
  };

  checkInputInArray = (input, array) => {
    const { tries } = this.state;

    if (tries > 0) {
      this.setState(state => {
        return {
          tries: state.tries - 1
        };
      });
    }

    if (
      array.findIndex(elm => {
        return elm === input.toUpperCase();
      }) !== -1
    ) {
      this.setState({
        showLink: true,
        showError: false
      });
    }
  };

  onEnterKeyPressed = e => {
    const { titleAsArray, input } = this.state;

    if (e.key === "Enter") {
      this.checkInputInArray(input, titleAsArray);
    }
  };

  onSubmit = e => {
    const { titleAsArray, input, showLink } = this.state;

    if (input === "" || showLink) {
      return;
    }

    this.checkInputInArray(input, titleAsArray);
  };

  componentDidMount() {
    this.setState({
      titleAsArray: this.props.article.title
        .toUpperCase()
        .replace(/[\W_]+/g, " ")
        .trim()
        .split(" ")
    });
  }

  componentDidUpdate() {
    const { tries, showLink, showError } = this.state;

    if (tries === 0 && !showLink) {
      this.setState({
        showLink: true,
        showError: false
      });
    }

    if (tries < 3 && !showError && !showLink) {
      this.setState({
        showError: true
      });
    }
  }

  render() {
    const { article } = this.props;
    const { input, showLink, tries, showError } = this.state;

    const hideTitleBlock = () => (
      <div className="card-title-hide">
        <div className="bar bar1" />
        <div className="bar bar2" />
      </div>
    );

    const showTitleBlock = () => (
      <a href={article.url} target="_blank" className="card-title-show">
        {article.title}
      </a>
    );

    const showErrorBorder = () => {
      if (showError) {
        return {
          border: "1px solid red"
        };
      } else if (!showError) {
        return null;
      }
    };

    const showErrorMessage = () => {
      if (showError) {
        return {
          opacity: "1"
        };
      } else if (!showError) {
        return {
          opacity: "0"
        };
      }
    };

    return (
      <div className="card" id="card">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${article.urlToImage})` }}
        />
        <div className="card-body">
          <div className="card-title">
            {showLink ? showTitleBlock() : hideTitleBlock()}
          </div>

          <div className="card-actions">
            <Input
              value={input}
              onChange={this.onInputChange}
              onKeyUp={this.onEnterKeyPressed}
              style={showErrorBorder()}
              placeholder="Guess one word..."
            />
            <Button onClick={this.onSubmit}>Submit</Button>
          </div>

          <div className="card-message" style={showErrorMessage()}>
            <p>Try again, attempts left: {tries}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
