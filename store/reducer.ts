import { IState } from '../types';

type ACTIONTYPE = { type: "SET_SEARCH_ITEMS"; payload: IState }


const Reducer = (state:IState, action : ACTIONTYPE) => {
    switch (action.type) {
        case 'SET_SEARCH_ITEMS':
            return {
                ...action.payload
            };
        default:
            return state;
    }
};

export default Reducer;