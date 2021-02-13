import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import './item-details.css';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};
export { Record };
export default class ItemDetails extends Component {
  state = { item: null, loading: false, image: null };
  swapiService = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }

  updateItem = () => {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;
    getData(itemId).then((item) =>
      this.setState({ item, image: getImageUrl(item) })
    );
  };
  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({ loading: true });
      this.updateItem();
      setTimeout(() => this.setState({ loading: false }), 1000);
    }
  }
  render() {
    if (!this.state.item) return <span>Select a item from list</span>;

    const { item, loading, image } = this.state;
    const { name } = item;
    if (loading) return <Spinner />;

    return (
      <div className="person-details card d-flex align-items-center">
        <img className="person-image" src={image} alt={name} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}
