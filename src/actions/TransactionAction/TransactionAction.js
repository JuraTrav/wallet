import * as actions from '../ActionNames';

export const getTransactions = data => dispatch => {

  dispatch({type: actions.TRANSACTIONS, payload: data});
}

export const newTransaction = data => dispatch => {

  dispatch({type: actions.NEW_TRANSACTIONS, payload: data});
}

export const editTransaction = (data, index) => dispatch => {

  dispatch({type: actions.EDIT_TRANSACTIONS, payload: data, index: index});
}

export const removeTransaction = index => dispatch => {

  dispatch({type: actions.REMOVE_TRANSACTIONS, payload: index});
}
