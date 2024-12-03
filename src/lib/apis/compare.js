import axios from "axios";

export const getCompareETFList = async (filter) => {
  try {
    const response = await axios.get("http://localhost:8080/api/compare/result", {
      params: {
        filter: filter,
      },
    });
    console.log(response.data);

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const postCompareETF = async (filter) => {
  try {
    const response = await axios.get("http://localhost:8080/api/compare/result", {
      params: {
        filter: filter,
      },
    });
    console.log(response.data);

    return response.data;
  } catch (e) {
    console.error(e);
  }
};
