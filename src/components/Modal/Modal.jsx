import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";
const modalRootRef = document.querySelector("#modal-root");




export default class Modal extends Component {
    
  componentDidMount() {
    document.addEventListener("keydown", this.onCloseModalByEscape);
  }
  

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onCloseModalByEscape);
  };
  

  onCloseModal = (e) => {
    if (e.target.nodeName !== "DIV") {
      return
    };
    this.props.onTogle(false);
  }


  onCloseModalByEscape = (e) => {
    if (e.code === "Escape") {
      this.props.onTogle(false);
    };
  };
   

    render() {
      const { data } = this.props;
        

      return (createPortal(<div
        onClick={this.onCloseModal}
        className={css.Overlay}>
        <img
          className={css.Modal}
          src={data.src}
          alt={data.alt} />
      </div>, modalRootRef));
  };
};
