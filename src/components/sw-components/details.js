import React from 'react';
import SwapiService from '../../services/swapi-service';
import { ItemDetails, Record } from '../item-details';

const {
  getPerson,
  getPlanet,
  getStarship,
  getPersonImage,
  getPlanetImage,
  getStarshipImage,
} = new SwapiService();

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="eyeColor" label="Eye color" />
      <Record field="gender" label="Gender" />
      <Record field="birthYear" label="Birth year" />
    </ItemDetails>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPlanet}
      getImageUrl={getPlanetImage}
    >
      <Record field="name" label="Name" />
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};
const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      itemId={itemId}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
      <Record field="cargoCapacity" label="Cargo capacity" />
      <Record field="passengers" label="Passengers" />
    </ItemDetails>
  );
};

export { PersonDetails, PlanetDetails, StarshipDetails };
