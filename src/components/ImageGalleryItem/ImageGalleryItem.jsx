import React, { Component } from "react";
import Modal from "components/Modal/Modal";
import css from "./ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
    
    state = {
        img: "",
        isOpen: false,
    }

    onGetImg = (e) => {
        const data = {
            src: e.target.src,
            alt: e.target.alt,
        };

        this.setState({ img: data, isOpen: true });
    }

    onTogleModal = (value) => {
        this.setState({ isOpen: value });
    };

  
    render() {
        const { data } = this.props;
        const { isOpen, img } = this.state;
    
        if (isOpen) {
            return (<Modal
                data={img}
                onTogle={this.onTogleModal} />)
        };

        return (
            data.map((el, i) => {
                return <li
                    className={css.ImageGalleryItem}
                    key={i}>
                    <img
                        onClick={this.onGetImg}
                        data={el.webformatURL}
                        className={css.ImageGalleryItemImage}
                        src={el.webformatURL} alt={el.tags} />
                </li>  
            }));
    }
};