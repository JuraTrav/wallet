import * as actions from '../actions/ActionNames';

const initialState = {
  transactions: [],
}

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case actions.TRANSACTIONS:
      return {...state, transactions: action.payload}
    case actions.NEW_TRANSACTIONS:
      return {...state, transactions: [...state.transactions, action.payload]}
    case actions.EDIT_TRANSACTIONS:
      let edited = state.transactions;
      
      edited.splice(action.index, 1, action.payload);
      return {...state, transactions: edited}
    case actions.REMOVE_TRANSACTIONS:
      let newState = state.transactions;
      newState.splice(action.payload, 1);
      return {...state, transactions: newState}
    default:
      return state;
  }
}
