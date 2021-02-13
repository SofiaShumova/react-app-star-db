import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import Row from '../row';
import ErrorBoundary from '../error-boundary';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  };

  swapiService = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const personDetails = (
      <div>
        <ItemDetails personId={this.state.selectedPerson} />
        <ErrorButton />
      </div>
    );

    return (
      <ErrorBoundary>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundary>
    );
  }
}
