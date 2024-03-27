import loaderToggle from "./loader";

const request = async (resurce) => {
  loaderToggle(true);
  const req = await fetch(resurce);
  if (!req.ok) {
    throw new Error("Something went wrong :(");
  }
  const data = await req.json();
  loaderToggle(false);
  return data;
};

export default request;
