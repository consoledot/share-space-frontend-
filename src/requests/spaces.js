import axios from "axios";
import baseURL from "./axios";

const Listing = () => {
  const addSpace = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/api/spaces/create`, data);
      const message = response.data;
      return message;
    } catch (error) {
      return error;
    }
  };
  return { addSpace };
};

export default Listing;
