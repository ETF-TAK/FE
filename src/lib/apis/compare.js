import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

export const getCompareETFList = async (filter) => {
  try {
    const response = await axios.get(`${baseURL}/api/compare/result`, {
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

export const postCompareETF = async (data) => {
  try {
    const response = await axios.post(`${baseURL}/api/compare`, data, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(response.data);

    return response.data;
  } catch (e) {
    console.error(e);
  }
};
