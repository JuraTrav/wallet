import * as actions from '../actions/ActionNames';

const initialState = {
    settings: {
        income: [],
        expense: []
    }
}

export default function settings(state = initialState, action) {
    switch (action.type) {
        case actions.CATEGORY_ITEMS:
            return {...state, settings: action.payload}
        case actions.ADD_CATEGORY_ITEM:
            if(action.payload.category === "income") {
                return {...state, settings: {...state.settings, income: [...state.settings.income, action.payload.item]}}
            } else if(action.payload.category === "expense") {
                return {...state, settings: {...state.settings, expense: [...state.settings.expense, action.payload.item]}}
            }
            break;
        case actions.EDIT_CATEGORY_ITEM:
            let edited;

            if(action.payload.category === "income") {
                edited = state.settings.income;
                edited.splice(action.index, 1, action.payload.item);

                return {...state, settings: {...state.settings, income: edited}}
            } else if(action.payload.category === "expense") {
                edited = state.settings.expense;                
                edited.splice(action.index, 1, action.payload.item);
                
                return {...state, settings: {...state.settings, expense: edited}}
            }
            break;
        case actions.REMOVE_CATEGORY_ITEM:
            let newState;

            if(action.category === "income") {
                newState = state.settings.income;
                newState.splice(action.index, 1);

                return {...state, settings: {...state.settings, income: newState}}
            } else if(action.category === "expense") {
                newState = state.settings.expense;
                newState.splice(action.payload, 1);
                
                return {...state, settings: {...state.settings, expense: newState}}
            }
            // eslint-disable-next-line
        default:
            return state;
    }
}
