import React, { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import getImg from "rest-api/rest-api";
import css from "./ImageGallery.module.css";
import Button from "components/Button/Button";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";


export default class ImageGallery extends Component {
    
    state = {
        images: [],
        status: "idle",
        total: "",
        page: 1,
    }
 
    componentDidUpdate(prevProps, prevState) {
        const { page, images } = this.state;
        const { params } = this.props;
    
        if (params !== prevProps.params) {
           
            this.setState({ images: [], page: 1, status: "pending" } );
            
            getImg(params).then(pics => this.setState({
                images: [...pics.hits],
                total: pics.totalHits,
                status: "success",
            })).catch(() => this.setState({
                status: "error",
            }));
        };

        if (page !== prevState.page) {

            this.setState({status: "loading"});

            getImg(params, page).then(pics => this.setState({
                images: [...images, ...pics.hits],
                status: "succses",
            }));
        }

        
    };   

    incrementPage = (value) => {
        this.setState({ page: value + 1 });
    };
   

    render() {
        const { images, total, status } = this.state;
         
    
        if (status === "error" || total === 0) {
            return (<p className={css.ErrorMesage}>Please try to enter another word</p>)
        };


        if (status === "pending") {
            return (<LoadingSpinner/>)
        }
     
        if (total <= images.length || total <= 20) { 
            return (<ul
                className={css.ImageGallery}>
                <ImageGalleryItem data={images} />
            </ul>);
        };

        if (status === "loading") {
            return(<>
                <ul
                className={css.ImageGallery}>
                <ImageGalleryItem data={images} />
                </ul>
                <LoadingSpinner/>
                </>)
        }
      
        if (total >= images.length) {
            return (<>
                <ul
                    className={css.ImageGallery}>
                    <ImageGalleryItem data={images} />
                </ul>
                <Button
                    updatePage={this.incrementPage} />
            </>);
        };
    };
};





