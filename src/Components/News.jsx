import React, { Component } from "react";

export default class News extends Component {
  render() {
    return (
      <div>
        <h3>新闻页</h3>
      </div>
    );
  }
  componentDidMount() {
    console.log(this.props.match.params);
    console.log(this.props.location.search);
    console.log(this.props.location.state);
  }
}
