import axios from "axios";

const key = "26492678-421fe4043219fdab389abba4d";

const instance = axios.create({
  baseURL: "https://pixabay.com/api",
  params: {
    key: key,
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12,
  },
});

const searchImages = (page = 1, q) => {
  return instance.get("/", {
    params: {
      page,
      q,
    },
  });
};

export const Api = {
  searchImages,
};
