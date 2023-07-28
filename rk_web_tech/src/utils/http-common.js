import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/v1",
  headers: {
    "Content-type": "application/json",
  },
});

console.log(localStorage.getItem("token"));
