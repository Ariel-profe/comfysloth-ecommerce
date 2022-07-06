import { createContext, useReducer, useContext, useEffect } from "react";
import { filterReducer } from "../reducers/filterReducer";
import { ProductsContext } from "./ProductsContext";

import {types} from '../types/types';

const initialState= {
    allProducts: [],
    filteredProducts : [],
    gridView: true,
    sort: 'price-lowest',
    filters: {
        text: '',
        company: 'all',
        category: 'all',
        color: 'all',
        minPrice: 0,
        maxPrice: 0,
        price: 0,
        shipping: false
    }
};

export const FilterContext = createContext();

export const FilterProvider = ({children}) => {

    const {products} = useContext(ProductsContext);
  
    const [state, dispatch] = useReducer(filterReducer, initialState);

    useEffect(() => {
      dispatch({type: types.loadProducts, payload: products});
    }, [products]);

    useEffect(() => {
        dispatch({type: types.filterProducts})
        dispatch({type: types.sortProducts})
    }, [state.sort, state.filters, state.filters.price]);

    const setGridView = () => {
        dispatch({type: types.setGridView})
    };

    const setListView = () => {
        dispatch({type: types.setListView})
    };
    
    const handleSortChange = (e) => {
        const value = e.target.value;
        dispatch({type: types.updateSort, payload: value});
    };

    const handleFilterChange = (e) => {
        let name  = e.target.name;
        let value = e.target.value;

        if(name === 'category') {
            value = e.target.textContent
          }
        if(name === 'color'){
            value = e.target.dataset.color
          }
        if(name === 'price'){
            value = Number(value)
          }
        if(name === 'shipping'){
            value = e.target.checked
        }
        
        dispatch({type: types.updateFilters, payload: {name, value}});
    };

    const clearFilters = () => {
        dispatch({type: types.clearFilters});
    }

    return (
        <FilterContext.Provider value={{...state, setGridView, setListView, handleSortChange, handleFilterChange, clearFilters}}>
            {children}
        </FilterContext.Provider>
    )


};