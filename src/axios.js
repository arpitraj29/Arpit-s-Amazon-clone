import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-ar.cloudfunctions.net/api"
  //'http://localhost:5001/challenge-ar/us-central1/api'
});

export default instance;
