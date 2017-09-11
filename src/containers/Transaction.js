import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getTransactions, 
         newTransaction, 
         removeTransaction, 
         editTransaction } from '../actions/TransactionAction/TransactionAction';

import { getCategoryItems } from '../actions/SettingsAction/SettingsActions';

import Header from '../components/Header/Header';
import Transactions from '../components/Transactions/Transactions';

class Transaction extends Component {

  componentDidMount() {
    if(localStorage["data"] !== undefined && localStorage["data"] !== null){
      this.props.onGetTransactions(JSON.parse(localStorage["data"]));
    }
    if(localStorage["category"] !== undefined && localStorage["category"] !== null){
      this.props.onGetCategoryItems(JSON.parse(localStorage["category"]));
    }
  }

  render() {
    const { data, category, onNewTransaction, onRemoveTransaction, onEditTransaction } = this.props;
    
    if(data.transactions.length > 0) {
      localStorage["data"] = JSON.stringify(data.transactions);
    }

    return (
      <div className="container">
        <Header tabId="1" />
        <main>
          <Transactions data={data}
                        category={category}
                        onNewTransaction={onNewTransaction}
                        onRemoveTransaction={onRemoveTransaction}
                        onEditTransaction={onEditTransaction} />
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state.transactions,
    category: state.settings
  }),
  dispatch => ({
    onGetTransactions: (data) => {
      dispatch(getTransactions(data));
    },
    onGetCategoryItems: (data) => {
      dispatch(getCategoryItems(data));
    },
    onNewTransaction: (data) => {
      dispatch(newTransaction(data));
    },
    onRemoveTransaction: (index) => {
      dispatch(removeTransaction(index));
    },
    onEditTransaction: (data, index) => {
      dispatch(editTransaction(data, index));
    },
    
  })
)(Transaction);
