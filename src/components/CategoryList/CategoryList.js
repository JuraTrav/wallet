import React, { Component } from 'react';
import {TiTrash, TiEdit, TiTickOutline} from 'react-icons/lib/ti';

export default class CategoryList extends Component {
    constructor() {
        super();
        
        this.state = {
            key: null,
            category: "",
            item: "",
            edit: false,
        }
    }
    
    componentDidMount(){
        this.setState({category: this.props.value});
    }

    edit(i, item, e) {
        this.setState({key: i, item: item, edit: !this.state.edit, disabled: !this.state.disabled});
    }

    change(e) {
        this.setState({item: e.target.value});
    }

    remove(i, e) {
        this.props.onRemoveItem(i, this.state.category);
    }

    confirm(e) {
        let data = {category: this.state.category, item: this.state.item}

        this.setState({
            key: null,
            item: "",
            edit: !this.state.edit,
            disabled: !this.state.disabled
        });

        this.props.onEditItem(data, this.state.key);
    }

    render() {
        const { data } = this.props;

        let li;

        if(data !== undefined && data.length !== 0){
            
            li = data.map((item, key) => {
                
                return (
                        <li key={key}>
                            {this.state.key !== key &&
                                <label>{item}</label>
                            }{this.state.key === key &&
                                <input name="category-item" value={this.state.item} onChange={this.change.bind(this)} />
                            }
                            {(this.state.key !== key && !this.state.edit) &&
                                <TiEdit className="edit-category-item" 
                                        onClick={this.edit.bind(this, key, item)} />
                            }{(this.state.key === key && this.state.edit) &&
                                <TiTickOutline className="confirm-category-item" onClick={this.confirm.bind(this)} />
                            }
                                <TiTrash className="remove-category-item" 
                                         onClick={this.remove.bind(this, key)} />
                            
                        </li>);
            })
        }
        

        return (
            <div className="category-list">
                <ul>
                    {li}
                </ul>
                
            </div>
        );
    }
}