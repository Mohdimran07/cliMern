import axios from "axios";

const API_URL = "api/goals";

const create = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URL}`, data, config);
  console.log("response", response.data);
  return response.data;
};

const getData = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  console.log(response.data);
  return response.data;
};

const expenseService = {
  create,
  getData,
};

export default expenseService;
