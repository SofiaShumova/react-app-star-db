import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import ItemDetails from '../item-details';

import './app.css';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import { Record } from '../item-details/item-details';
import ErrorBoundary from '../error-boundary';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components';

export default class App extends Component {
  swapiService = new SwapiService();

  state = { selectedPerson: 5 };

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };
  render() {
    return (
      <ErrorBoundary>
        <div>
          <Header />

          <PersonDetails itemId={4} />
          <PlanetDetails itemId={4} />
          <StarshipDetails itemId={12} />

          <PersonList renderItem={(item) => <span>{item.name}</span>} />
          <PlanetList renderItem={(item) => <span>{item.name}</span>} />
          <StarshipList renderItem={(item) => <span>{item.name}</span>} />
        </div>
      </ErrorBoundary>
    );
  }
}
