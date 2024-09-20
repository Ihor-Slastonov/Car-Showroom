import { useVehicle } from '../../utils/hooks/useVehicle';
import VehicleCard from './VehicleCard/VehicleCard';

import { StyledUl } from './VehicleList.styled';

const VehicleList = () => {
  const { filteredVehicles } = useVehicle();
  return (
    <StyledUl>
      {filteredVehicles?.map(vehicle => (
        <li key={vehicle.id}>
          <VehicleCard vehicle={vehicle} />
        </li>
      ))}
    </StyledUl>
  );
};

export default VehicleList;
