import { useEffect, useState } from 'react';

import Container from '../../components/common/Container/Container';
import Section from '../../components/common/Section/Section';

import vehicleApi from '../../services/vehiclesApi';

const HomePage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllVehicles = async () => {
      try {
        setIsLoading(true);
        const vehicles = await vehicleApi.fetchAllVehicles();
        if (vehicles.length === 0) return;
        console.log(vehicles.products);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getAllVehicles();
  }, []);

  return (
    <Section>
      <Container>{isLoading && <p>Loading</p>}</Container>
    </Section>
  );
};

export default HomePage;
