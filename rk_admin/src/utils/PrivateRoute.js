import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    function getCookie(name) {
      let cookieArr = document.cookie.split("; ");
      for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        let cookieName = cookiePair[0];
        let cookieValue = cookiePair[1];
        if (cookieName === name) {
          return decodeURIComponent(cookieValue);
        }
      }
      // If the cookie is not found, return null or handle it as needed.
      return null;
    }
    let cookieValue = getCookie("token");
    if (cookieValue) {
      //   return 0;
    } else {
      navigate("/user/login");
    }
  });
  return <>{children}</>;
};

export default PrivateRoute;
