import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:7070/api/planets",
  headers: {
    "Content-type": "application/json"
  }
});