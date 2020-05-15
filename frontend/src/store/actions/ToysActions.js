import toysService from '../../services/toysService';

export function loadToys() {
  return (dispatch) => {
    toysService
      .query()
      .then((toys) => dispatch({ type: 'SET_TOYS', payload: toys }));
  };
}

export function loadToy(id) {
  return (dispatch) => {
    toysService
      .getById(id)
      .then((toy) => dispatch({ type: 'SET_TOY', payload: toy }));
  };
}

export function saveToy(toy) {
  const type = toy._id ? 'UPDATE_TOY' : 'ADD_TOY';
  return (dispatch) => {
    toysService
      .save(toy)
      .then((savedToy) => dispatch({ type, payload: savedToy }));
  };
}

export function removeToy(toyId) {
  return (dispatch) => {
    toysService
      .remove(toyId)
      .then(() => dispatch({ type: 'REMOVE_TOY', payload: toyId }));
  };
}

export function searchToy(txt) {
  return (dispatch) => {
    dispatch({ type: 'SEARCH_TOY', payload: txt });
  };
}

export function filterToys(toys, txt) {
  let filteredToys = [];
  switch (txt) {
    case 'Funny':
      filteredToys = toys.filter((toy) => toy.type === 'Funny');
      break;
    case 'Adult':
      filteredToys = toys.filter((toy) => toy.type === 'Adult');
      break;
    case 'Educational':
      filteredToys = toys.filter((toy) => toy.type === 'Educational');
      break;
    default:
      filteredToys = toys;
  }
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER', payload: filteredToys });
  };
}

export function sortToys(toys, txt) {
  let filteredToys = [];
  switch (txt) {
    case 'Name':
      filteredToys = toys.sort((toyA, toyB) => {
        if (toyA.name.toUpperCase() < toyB.name.toUpperCase()) return -1;
        if (toyA.name.toUpperCase() > toyB.name.toUpperCase()) return 1;
        else return 0;
      });
      break;
    case 'Price':
      filteredToys = toys.sort(
        (toyA, toyB) => parseFloat(toyA.price) - parseFloat(toyB.price)
      );
      break;
    default:
      filteredToys = toys;
  }
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER', payload: filteredToys });
  };
}

export function inStock(toys) {
  const filteredToys = toys.filter((toy) => toy.inStock);
  return (dispatch) => {
    dispatch({ type: 'SET_FILTER', payload: filteredToys });
  };
}

export function clearFilter() {
  return (dispatch) => {
    dispatch({ type: 'CLEAR_FILTER' });
  };
}
