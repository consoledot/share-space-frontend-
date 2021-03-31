import axios from "axios";
import baseURL from "./axios";
const Authentication = () => {
  const signup = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/register`, data, {
        headers: {},
      });
      const message = response.data;
      return message;
    } catch (error) {
      return error;
    }
  };
  const login = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/api/auth/login`, data);
      const message = response.data;
      return message;
    } catch (err) {
      return err;
    }
  };
  const logout = {};
  return { login, logout, signup };
};

export default Authentication;
