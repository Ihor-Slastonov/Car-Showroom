import axios from 'axios';

const BASE_URL = 'https://dummyjson.com/products';

const fetchAllVehicles = async () => {
  const response = await axios.get(`${BASE_URL}/category/vehicle`);
  return response.data;
};

const fetchVehicleById = async id => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

const vehicleApi = {
  fetchAllVehicles,
  fetchVehicleById,
};

export default vehicleApi;
