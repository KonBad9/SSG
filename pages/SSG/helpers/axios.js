import axios from "axios";

const baseURL = `https://superheroapi.com/api/${5340281699411485}`;

export default axios.create({
  baseURL,
});
