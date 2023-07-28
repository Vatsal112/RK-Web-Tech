import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/v1",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
