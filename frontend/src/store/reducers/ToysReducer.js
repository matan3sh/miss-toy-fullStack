const initialState = {
  toys: [],
  toy: null,
  filtered: null,
};

export default function ToysReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_TOYS':
      return {
        ...state,
        toys: action.payload,
      };
    case 'SET_TOY':
      return {
        ...state,
        toy: action.payload,
      };
    case 'ADD_TOY':
      return {
        ...state,
        toys: [...state.toys, action.payload],
      };
    case 'UPDATE_TOY':
      return {
        ...state,
        toys: state.toys.map((toy) =>
          toy._id === action.payload._id ? action.payload : toy
        ),
      };
    case 'REMOVE_TOY':
      return {
        ...state,
        toys: state.toys.filter((toy) => toy._id !== action.payload),
      };
    case 'SEARCH_TOY':
      return {
        ...state,
        filtered: state.toys.filter((toy) =>
          toy.name.toUpperCase().includes(action.payload.toUpperCase())
        ),
      };
    case 'SET_FILTER':
      return {
        ...state,
        filtered: action.payload,
      };
    case 'CLEAR_FILTER':
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
}
