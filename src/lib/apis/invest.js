import axios from "axios";

export const getInvestETFList = async (category) => {
  try {
    const response = await axios.get("http://localhost:8080/api/invest", {
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
