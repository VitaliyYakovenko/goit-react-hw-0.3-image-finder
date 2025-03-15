import React, { Component } from "react";
import css from "./Button.module.css";

export default class Button extends Component {

    state = {
        currentPage: 1,
    };

    onUpdatePage = () => {
        this.setState(prevState => ({
            currentPage: prevState.currentPage + 1,
        }));
        this.props.updatePage(this.state.currentPage);
    };

    render() {
        return (<button onClick={this.onUpdatePage}
            className={css.Button}
            type="button">
            Load More
        </button>);
    };
};