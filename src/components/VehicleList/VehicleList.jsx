import PropTypes from 'prop-types';

import VehicleCard from './VehicleCard/VehicleCard';

import { StyledUl } from './VehicleList.styled';

const VehicleList = ({ vehicles }) => {
  return (
    <StyledUl>
      {vehicles?.map(vehicle => (
        <li key={vehicle.id}>
          <VehicleCard vehicle={vehicle} />
        </li>
      ))}
    </StyledUl>
  );
};

export default VehicleList;

VehicleList.propTypes = {
  vehicles: PropTypes.array.isRequired,
};
