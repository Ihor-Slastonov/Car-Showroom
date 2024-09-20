import { useContext } from 'react';
import { VehicleContext } from '../../components/VehicleContext/VehicleContext';

export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error('useSearch must be used with a SearchProvider');
  }
  return context;
};
