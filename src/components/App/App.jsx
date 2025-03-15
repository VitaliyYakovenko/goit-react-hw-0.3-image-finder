import React, { Component } from "react";
import Searchbar from "components/Searchbar/Seachbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import  css  from "./App.module.css";


export default class App extends Component {
  state = {
    query: "",
  };
 
  getQuery = (value) => {
    this.setState({ query: value });
  }
 

  render() {

    return (

      <div className={css.app}>
        <Searchbar
          getValue={this.getQuery}/>
        <ImageGallery params={this.state.query} />
      </div>);
  }
};