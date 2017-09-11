import React, { Component } from 'react';

import CategoryList from '../CategoryList/CategoryList';

export default class Category extends Component {
    constructor(){
        super();
    
        this.state = {
          category: "income",
          item: "",
          disabled: true,
        }
    }

    change(e) {
        let newState;

        if(e.target.name === "transaction"){
            newState = {...this.state, category: e.target.value}
        } else if(e.target.name === "category-item"){
            newState = {...this.state, item: e.target.value, disabled: false}
        }

        this.setState(newState);
    }

    add() {
        let data = this.state;

        this.setState({category: "income", item: "", disabled: true});

        this.props.onAddItem(data);        
    }

    render() {
        const { data } = this.props;

        return (
            <div className="container">
                <div className="category-add">
                    <div className="form-item">
                        <input type="text" name="category-item" value={this.state.item} onChange={this.change.bind(this)} />
                    </div>
                    <div className="form-item">
                        <select value={this.state.category} name="transaction" onChange={this.change.bind(this)}>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div className="form-item-button">
                        <button className={this.state.disabled ? "disabled" : ""}
                                disabled={this.state.disabled ? "disabled" : ""} 
                                onClick={this.add.bind(this)}>Add</button>
                    </div>                    
                </div>
                <div className="category-display">
                    <div className="income-cat">
                        <h2>Income</h2>
                        <CategoryList data={data.income} 
                                      onEditItem={this.props.onEditItem}
                                      onRemoveItem={this.props.onRemoveItem} 
                                      value="income" />
                    </div>
                    <div className="expense-cat">
                        <h2>Expense</h2>
                        <CategoryList data={data.expense} 
                                      onEditItem={this.props.onEditItem}
                                      onRemoveItem={this.props.onRemoveItem}  
                                      value="expense" />
                    </div>
                </div>
            </div>
        )
    }
}