const get = async (path) => {
  try {
    const response = await fetch(path);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getDinos = () => {
  return get(`https://norian.studio/wp-json/wp/v2/dinos`);
};

export const getDinoPost = (slug) => {
  return get(`https://norian.studio/wp-json/wp/v2/dinos?slug=${slug}&_embed`);
};
