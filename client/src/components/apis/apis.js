import axios from "axios";

const backend_url = process.env.REACT_APP_BACKEND_URL;

export const createPost = async ({ userData, endPoints }) => {
  try {
    const { data } = await axios.post(`${backend_url}${endPoints}`, userData);
    return data;
  } catch (error) {
    throw error.response.data || error.response.message;
  }
};
