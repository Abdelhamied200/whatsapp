import axios from "axios";

let url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9000/api"
    : "https://whatsapapi.herokuapp.com/api";

const instance = axios.create({
  baseURL: url,
});

export default instance;
