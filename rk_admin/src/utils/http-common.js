import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000/v1",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${getCookie("token")}`,
  },
});

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}
