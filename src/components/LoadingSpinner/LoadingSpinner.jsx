import {ColorRing}  from "react-loader-spinner";
import  css  from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={css.container}>
    <ColorRing
      visible={true}
      height="120"
      width="120"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
      </div>)
};

export default LoadingSpinner;