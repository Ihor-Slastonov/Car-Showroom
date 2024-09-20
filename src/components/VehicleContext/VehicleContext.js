import { createContext, useState } from 'react';

//create new context
export const VehicleContext = createContext();

//context provider

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  const handleSearch = query => {
    if (query === '') {
      return setFilteredVehicles(vehicles);
    }
    const filtered = vehicles.filter(vehicle =>
      vehicle.title.toLowerCase().includes(query)
    );
    setFilteredVehicles(filtered);
  };

  return (
    <VehicleContext.Provider
      value={{
        handleSearch,
        setVehicles,
        vehicles,
        filteredVehicles,
        setFilteredVehicles,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
