/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';

import './random-planet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };
  onError = () => {
    this.setState({ error: true, loading: false });
  };
  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;

    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorIndicator />
        ) : (
          <PlanetView planet={planet} />
        )}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
