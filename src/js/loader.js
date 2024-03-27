const loaderE1 = document.querySelector(".loader");

const loaderToggle = (info) => {
  if (info) {
    loaderE1.classList.remove("hidden");
  } else {
    loaderE1.classList.add("hidden");
  }
};

export default loaderToggle;
