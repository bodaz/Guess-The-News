import React, { Component } from "react";
import Select from "antd/lib/select";

import "./Filter.css";
import db from "../../db.json";

const Option = Select.Option;

class Filter extends Component {
  onCategoryChange = value => {
    this.props.onFilterChange("category", value);
  };

  render() {
    const { category } = this.props;
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
      </div>
    );
  }
}

export default Filter;
