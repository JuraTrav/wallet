import * as actions from '../ActionNames';

export const getCategoryItems = data => dispatch => {

  dispatch({type: actions.CATEGORY_ITEMS, payload: data});
}

export const addCategoryItem = data => dispatch => {

  dispatch({type: actions.ADD_CATEGORY_ITEM, payload: data});
}

export const editCategoryItem = (data, index) => dispatch => {

  dispatch({type: actions.EDIT_CATEGORY_ITEM, payload: data, index: index});
}

export const removeCategoryItem = (index, cat) => dispatch => {

  dispatch({type: actions.REMOVE_CATEGORY_ITEM, payload: index, category: cat});
}
