import React, { Component } from "react";
import { Select } from "antd";

import "./Filter.css";
import db from "../../db.json";

const Option = Select.Option;

class Filter extends Component {
  onCategoryChange = value => {
    this.props.onFilterChange("category", value);
  };

  onLanguageChange = value => {
    this.props.onFilterChange("language", value);
  };

  render() {
    const { category, language } = this.props;
    return (
      <div className="filter">
        <Select
          onChange={this.onCategoryChange}
          value={category}
          style={{ width: "150px" }}
        >
          {db.categories.map((category, index) => {
            return (
              <Option value={category.value} key={index}>
                {category.name}
              </Option>
            );
          })}
        </Select>
        <Select
          onChange={this.onLanguageChange}
          value={language}
          style={{ width: "150px" }}
        >
          {db.languages.map((language, index) => {
            return (
              <Option value={language.value} key={index}>
                {language.name}
              </Option>
            );
          })}
        </Select>
      </div>
    );
  }
}

export default Filter;
