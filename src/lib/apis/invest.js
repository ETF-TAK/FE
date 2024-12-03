import axios from "axios";

export const getInvestETFList = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/invest", {
      params: {
        category: "LEVERAGE",
      },
    });
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
