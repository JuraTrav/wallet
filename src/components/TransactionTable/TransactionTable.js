import React, { Component } from 'react';
import classNames from 'classnames';

class TransactionTable extends Component {

  edit = (data, e) => {
    this.props.editTransaction(data);
  }

  remove = (data, e) => {
    const { transactions } = this.props.data;
    this.props.onRemoveTransaction(transactions.indexOf(data));
  }

  render() {
    const { data } = this.props;
    var tr, allTransactions, sum = 0;

    if(data !== undefined && data !== null && data.transactions.length !== 0){

      allTransactions = data.transactions.map(index => {
        let newSum = [];
        if(index.category === "income") {
          newSum = index.sum;
        } else {
          newSum = "-" + index.sum;
        }
        return newSum;
      });

      sum = allTransactions.reduce((prev, next) => {
        return parseInt(prev, 10) + parseInt(next, 10);
      });

      tr = data.transactions.map((index, key) => {
        return (
          <tr key={key} >
            <td>{index.date}</td>
            <td>{index.description}</td>
            <td className={classNames({"income": index.category === "income", "outcome": index.category === "outcome"})}>{index.sum}</td>
            <td>{index.item}</td>
            <td>
              <div onClick={this.edit.bind(this, index)}>Edit</div>
            </td>
            <td>
              <div onClick={this.remove.bind(this, index)}>Remove</div>
            </td>
          </tr>
        );
      });
    }

    return (
      <table className="wallet-transactions">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Sum</th>
            <th>Category</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tr}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2"></td>
            <td className={classNames({"income": sum > 0, "outcome": sum < 0})}>{sum}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default TransactionTable;
