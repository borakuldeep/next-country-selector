
import React, {createContext, useReducer} from "react";
import Reducer from './reducer';
import { IState } from '../types';


const initialState: IState = {
    searchItems: [],
    searchDetails: []
};

const Store = ({children}: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
};

export const StoreContext = createContext<IState>(initialState);
export default Store;