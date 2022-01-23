export const apiService = async (query, page = 1, per_page = 12) => {
  const data = {
    base_url: "https://pixabay.com/api",
    api_key: "24282409-c51302311d18786c8ef637bd6",
    type: "photo",
    totalImages: "",
    result: null,
    orientation: "horizontal",
  };
  const url = `${data.base_url}/?key=${data.api_key}&q=${query}&per_page=${per_page}&page=${page}&type=${data.type}&orientation=${data.orientation}`;
  const response = await fetch(url);
  data.result = response.json();
  return data.result;
};
