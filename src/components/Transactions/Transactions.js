import React, { Component } from 'react';

import NewTransaction from '../NewTransaction/NewTransaction';
import TransactionTable from '../TransactionTable/TransactionTable';

class Transactions extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
      newTransaction: false,
      editTransaction: false,
    }
  }

  addTransaction = () => {
    let add = !this.state.newTransaction;
    this.setState({newTransaction: add, editTransaction: false});
  }

  editTransaction = (data) => {
    let list = this.props.data.transactions;
    let itemIndex = list.indexOf(data);

    this.setState({data: data, item: itemIndex, editTransaction: true, newTransaction: false});
  }

  onConfirm() {
    this.setState({newTransaction: false, editTransaction: false});
  }

  render() {
    const { data, onRemoveTransaction, onNewTransaction, onEditTransaction, category } = this.props;

    return (
      <div className="wallet-transactions">
        <button onClick={this.addTransaction.bind(this)}>New transaction</button>
        {this.state.newTransaction &&
          <NewTransaction onNewTransaction={onNewTransaction}
                          onEditTransaction={onEditTransaction}
                          confirm={() => this.onConfirm()}
                          index={this.state.item}
                          categoryItems={category}
                          data={this.state.data} />
        }{ this.state.editTransaction &&
          <NewTransaction onEditTransaction={onEditTransaction}
                          confirm={() => this.onConfirm()}
                          edit={this.state.editTransaction}
                          index={this.state.item}
                          categoryItems={category}
                          data={this.state.data} />
        }
        <TransactionTable data={data}
                          onRemoveTransaction={onRemoveTransaction}
                          editTransaction={(data) => this.editTransaction(data)}/>
      </div>
    );
  }
}

export default Transactions;
