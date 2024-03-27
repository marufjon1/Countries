import "../css/main.css";

import request from "./request";
import { createCountries } from "./update";
import "./filter";
import "./mode";

const API = "https://restcountries.com/v3.1/all";

request(API)
  .then((data) => {
    createCountries(data);
  })
  .catch((err) => {
    console.log(err);
  });
