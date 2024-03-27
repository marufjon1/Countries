const searchFormE1 = document.querySelector(".search");

searchFormE1.search.addEventListener("input", () => {
  const searchValue = searchFormE1.search.value.toLowerCase();
  const cardsItem = document.querySelectorAll(".cards__item");
  const cardsTitles = document.querySelectorAll(".cards__title");
  cardsTitles.forEach((title, i) => {
    if (title.textContent.toLowerCase().includes(searchValue)) {
      cardsItem[i].style.display = "block";
    } else {
      cardsItem[i].style.display = "none";
    }
  });
});

const searchSelect = document.querySelectorAll(".search__select-list li");
const searchSelectSpan = document.querySelector(".search__select span");

import { createCountries } from "./update";
import request from "./request";

searchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    searchSelectSpan.textContent = li.textContent;
    let filterAPI;
    if (li.textContent == "ALL") {
      filterAPI = "https://restcountries.com/v3.1/all";
    } else {
      filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;
    }

    request(filterAPI)
      .then((data) => {
        createCountries(data);
      })
      .catch((err) => {
        alert(err.massage);
      });
  });
});
