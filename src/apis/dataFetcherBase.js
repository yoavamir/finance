import axios from "axios";

export default axios.create({
  // baseURL: "https://finance-server-yoav-daphna.herokuapp.com",
  baseURL: "http://localhost:5000/",
});
