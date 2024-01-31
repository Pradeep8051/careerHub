
export const addTransaction = (transaction) => ({
    type: 'ADD_TRANSACTION',
    payload: transaction,
  });
  
  export const setFilter = (filter) => ({
   
    type: 'SET_FILTER',
    payload: filter,
  });
  