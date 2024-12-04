import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

export const getInvestETFList = async (category) => {
  try {
    const response = await axios.get(`${baseURL}/api/invest`, {
      params: {
        filter: category,
      },
    });
    console.log(response.data);

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const postInvestETF = async (data) => {
  console.log("이수용", data);
  try {
    const response = await axios.post(`${baseURL}/api/invest`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
