import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import toast from 'react-hot-toast';
import vehicleApi from '../../services/vehiclesApi';

import Section from '../../components/common/Section/Section';
import Container from '../../components/common/Container/Container';
import MyLoader from '../../components/common/MyLoader/MyLoader';
import VehicleFullDetails from '../../components/VehicleFullDetails/VehicleFullDetails';
import VehicleComments from '../../components/VehicleComments/VehicleComments';
import GoBackButton from '../../components/GoBackButton/GoBackButton';

const VehiclePage = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVehicle = async () => {
      try {
        setIsLoading(true);
        const vehicle = await vehicleApi.fetchVehicleById(vehicleId);
        setVehicle(vehicle);
      } catch (error) {
        toast.error('Server error try again');
      } finally {
        setIsLoading(false);
      }
    };

    getVehicle();
  }, [vehicleId]);

  return (
    <>
      <Section>
        <Container>
          <GoBackButton />
          {isLoading && <MyLoader />}
          {!isLoading && vehicle && <VehicleFullDetails vehicle={vehicle} />}
        </Container>
      </Section>
      <Section noTopPadding={true}>
        <Container>
          {!isLoading && vehicle && (
            <VehicleComments
              reviews={vehicle?.reviews}
              vehicleId={vehicle?.id}
            />
          )}
        </Container>
      </Section>
    </>
  );
};

export default VehiclePage;
