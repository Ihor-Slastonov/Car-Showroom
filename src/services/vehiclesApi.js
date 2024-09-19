import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

const fetchAllVehicles = async () => {
  const response = await axios.get(`${BASE_URL}/category/vehicle`);
  return response.data;
};

const vehicleApi = {
  fetchAllVehicles,
};

export default vehicleApi;
