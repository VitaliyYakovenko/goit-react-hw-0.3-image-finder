import React, { Component } from "react";
import css from "./Seachbar.module.css"


export default class Searchbar extends Component {
 
    searhImg = (e) => {
        e.preventDefault();
        if (e.target[1].value === "") {
            alert("Enter word please!")
            return;
        }
        this.props.getValue(e.target[1].value.trim());
        e.target[1].value = "";
    }


    reset = () => {

    };

    render() {
        return (<header className={css.searchbar}>
            <form onSubmit={this.searhImg}
                className={css.SearchForm}>
                <button type="submit" className={css.SearchFormButton}>
                    <span className={css.SearchFormButtonLabel}>Search</span>
                    Search
                </button>

                <input
                    className={css.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>);
    };
}