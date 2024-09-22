import { useEffect, useState } from 'react';
import { useVehicle } from '../../utils/hooks/useVehicle';

import Container from '../../components/common/Container/Container';
import Section from '../../components/common/Section/Section';
import MyLoader from '../../components/common/MyLoader/MyLoader';

import VehicleList from '../../components/VehicleList/VehicleList';

import vehicleApi from '../../services/vehiclesApi';

import { NotFoundText } from './HomePage.styled';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setVehicles, filteredVehicles, setFilteredVehicles } = useVehicle();

  useEffect(() => {
    const getAllVehicles = async () => {
      try {
        setIsLoading(true);
        const vehicles = await vehicleApi.fetchAllVehicles();
        if (vehicles.length === 0) return;

        setVehicles(vehicles?.products ? vehicles.products : []);
        setFilteredVehicles(vehicles?.products ? vehicles.products : []);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllVehicles();
  }, [setVehicles, setFilteredVehicles]);

  return (
    <Section>
      <Container>
        {isLoading && <MyLoader />}
        {!isLoading && filteredVehicles.length !== 0 && <VehicleList />}
        {!isLoading && filteredVehicles.length === 0 && (
          <NotFoundText>Vehicles Not Found</NotFoundText>
        )}
      </Container>
    </Section>
  );
};

export default HomePage;
