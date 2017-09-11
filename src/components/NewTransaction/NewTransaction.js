import React, { Component } from 'react';
import {TiArrowBackOutline, TiArrowForwardOutline} from 'react-icons/lib/ti';

class NewTransaction extends Component {
  constructor() {
    super();

    this.state = {
      date: "",
      description: "",
      sum: "0",
      category: "income",
      item: ""
    }

  }

  componentDidMount = () => {
    const { categoryItems, edit, data } = this.props;

    if(edit){
      this.setState(data);
    } else if(categoryItems !== undefined && categoryItems !== null && categoryItems.settings.income.length > 0) {
      this.setState({item: categoryItems.settings.income[0]});
    }
  }

  change = e => {
    let newState;

    if(e.target.name === "date") {
      newState = {...this.state, date: e.target.value};
    } else if(e.target.name === "description") {
      newState = {...this.state, description: e.target.value};
    } else if(e.target.name === "sum") {
      newState = {...this.state, sum: e.target.value};
    } else if(e.target.name === "categories") {
      newState = {...this.state, category: e.target.value};
    } else if(e.target.name === "category_item") {
      newState = {...this.state, item: e.target.value};
    }

    this.setState(newState);
  }

  clickEdit = e => {
    e.preventDefault();
    const { index, onEditTransaction, confirm } = this.props;

    let newData = this.state;

    onEditTransaction(newData, index);

    confirm();
  }

  clickAdd = e => {
    e.preventDefault();
    var data = [];
    let localData = localStorage["data"];
    let newData = this.state;

    if(localData !== undefined && localData !== null){
      data = JSON.parse(localStorage["data"]);
    }

    data.push(newData);

    localStorage["data"] = JSON.stringify(data);

    this.props.onNewTransaction(newData);

    this.props.confirm();
  }

  render() {
    const {date, description, sum, category} = this.state;
    const { categoryItems } = this.props;

    let option;

    if(this.state.category === "outcome"){
      option = categoryItems.settings.expense.map((item, key) => {
        return (
          <option key={key} value={item}>
            {item}
          </option>
        );
      })

    } else if(this.state.category === "income"){
      option = categoryItems.settings.income.map((item, key) => {
        return (
          <option key={key} value={item}>
            {item}
          </option>
        );
      })
    }

    return (
      <div className="add-transaction">
        <div className="form-item date">
          <label>Date</label>
          <input type="date" name="date" value={date} onChange={this.change.bind(this)} />
        </div>
        <div className="form-item">
          <label>Description</label>
          <input type="text" name="description" value={description} onChange={this.change.bind(this)} />
        </div>
        <div className="form-item sum">
          <label>Sum</label>
          <input type="text" name="sum" value={sum} onChange={this.change.bind(this)} />
        </div>
        <div className="form-item categories">
          <label>Transaction</label>
          <div>
            <label htmlFor="outcome">
              <TiArrowBackOutline className="outcome" />
              <input id="outcome" 
                     type="radio" 
                     name="categories" 
                     value="outcome" 
                     onChange={this.change.bind(this)} 
                     checked={category === "outcome" ? "checked" : "" } />
            </label>
            <label htmlFor="income">
              <TiArrowForwardOutline className="income" />
              <input id="income" 
                     type="radio" 
                     name="categories" 
                     value="income" 
                     onChange={this.change.bind(this)}
                     checked={category === "income" ? "checked" : "" } />
            </label>
          </div>
        </div>
        <div className="form-item">
          <label>Category</label>
          <select name="category_item" value={this.state.item} onChange={this.change.bind(this)}>
            {option}
          </select>
        </div>
        {this.props.edit &&
          <button onClick={this.clickEdit.bind(this)}>Edit</button>
        }{!this.props.edit &&
          <button onClick={this.clickAdd.bind(this)}>Add</button>
        }

      </div>
    );
  }
}

export default NewTransaction;
