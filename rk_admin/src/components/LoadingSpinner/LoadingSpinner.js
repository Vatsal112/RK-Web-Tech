import React from "react";
import "./Loading.css";

const LoadingSpinner = () => {
  return (
    <div class="d-flex justify-content-center align-items-center  w-100 spinner">
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
