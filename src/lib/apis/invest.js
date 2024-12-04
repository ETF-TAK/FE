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

export const postInvestETF = async (data) => {
  console.log("이수용", data);
  try {
    const response = await axios.post("http://localhost:8080/api/invest", data, {
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
