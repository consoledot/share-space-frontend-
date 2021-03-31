import axios from "axios";
import baseURL from "./axios";

const Listing = () => {
  const addSpace = async (data, token) => {
    try {
      const response = await axios.post(`${baseURL}/api/spaces/create`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const message = response.data;
      return message;
    } catch (error) {
      return error;
    }
  };
  return { addSpace };
};

export default Listing;
