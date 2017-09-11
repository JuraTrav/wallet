import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCategoryItems, 
         addCategoryItem, 
         editCategoryItem, 
         removeCategoryItem } from '../actions/SettingsAction/SettingsActions';

import Header from '../components/Header/Header';
import Category from '../components/Category/Category';

class Settings extends Component {
  
  componentDidMount() {
    if(localStorage["category"] !== undefined && localStorage["category"] !== null){
      this.props.onGetCategoryItems(JSON.parse(localStorage["category"]));
    }
  }
  
  render() {

    const { data, onAddCategoryItem, onEditCategoryItems, onRemoveCategoryItems } = this.props;
    
    if(data.settings.income.length > 0 || data.settings.expense.length > 0) {
      localStorage["category"] = JSON.stringify(data.settings);
    }

    
    return (
      <div className="container">
        <Header tabId="3" />
        <main>
          <Category data={data.settings} 
                    onAddItem={onAddCategoryItem}
                    onEditItem={onEditCategoryItems}
                    onRemoveItem={onRemoveCategoryItems} />
        </main>
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state.settings
  }),
  dispatch => ({
    onAddCategoryItem: (data) => {
      dispatch(addCategoryItem(data));
    },
    onGetCategoryItems: (data) => {
      dispatch(getCategoryItems(data));
    },
    onRemoveCategoryItems: (index, cat) => {
      dispatch(removeCategoryItem(index, cat));
    },
    onEditCategoryItems: (data, index) => {
      dispatch(editCategoryItem(data, index));
    }
  })
)(Settings);