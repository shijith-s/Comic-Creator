import axios from "axios";
let URL = process.env.REACT_APP_IMAGE_GENERATOR_URL;
let API_KEY = process.env.REACT_APP_IMAGE_GENERATOR_API_KEY;

export const generateImage = async (text) => {
  let body = {
    inputs: text,
  };
  let headers = {
    Accept: "image/png",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };
  let response = await axios.post(URL, body, { headers, responseType: "blob" });
  const blob = response.data;
  const imageUrl = window.URL.createObjectURL(blob);
  return imageUrl;
};
