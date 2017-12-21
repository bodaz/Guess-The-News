import React from "react";
import { connect } from "react-redux";

import { Button } from "../../components";

let Home = ({ status, counter, onIncrement }) => (
  <div className="home">
    <h1>{status}</h1>
    <h2>{counter}</h2>
    <Button onClick={onIncrement}>+</Button>
  </div>
);

const mapStateToProps = ({ counter, status }) => {
  return {
    counter,
    status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => {
      dispatch({
        type: "INCREMENT"
      });
    }
  };
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
