// src/reducers/transactionReducer.js

const initialState = {
    transactions: [],
    filter: 'all', // Default filter
  };
  
  const transction = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions, action.payload],
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default transction;
  