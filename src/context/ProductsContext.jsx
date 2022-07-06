import { createContext, useEffect, useReducer } from "react";
import axios from 'axios';

import {productsReducer} from '../reducers/productsReducer';
import { types } from "../types/types";
import { products_url } from "../utils/constants";


const initialState = {
    isSidebarOpen: false,
    productsLoading: false,
    productsError: false,
    products: [],
    featuredProducts: [],
    singleProductLoading: false,
    singleProductError: false,
    singleProduct: {},
};


export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
 
    const [state, dispatch] = useReducer(productsReducer, initialState);

    useEffect(() => {
        fetchProducts(products_url);
    }, [products_url])

    const fetchProducts = async(url) => {
       dispatch({ type: types.getProductsBegin });
       try {
           const res = await axios.get(url);
           const products = await res.data;
              dispatch({ type: types.getProductsSuccess, payload: products });
       } catch (error) {
            dispatch({ type: types.getProductsError });
       }   
    };

    const fetchSingleProduct = async (url) => {
        dispatch({ type: types.getSingleProductBegin });
        try {
            const res = await axios.get(url);
            const product = await res.data;
            dispatch({ type: types.getSingleProductSuccess, payload: product });
        } catch (error) {
            dispatch({ type: types.getSingleProductError });
        }
    };
    
    const openSidebar = () => {
        dispatch({
            type: types.uiOpenSidebar
        });
    };

    const closeSidebar = () => {
        dispatch({
            type: types.uiCloseSidebar
        });
    };
    
 
    return (
        <ProductsContext.Provider value={{
            ...state,
            openSidebar,
            closeSidebar,
            fetchSingleProduct
        }}>
            {children}
        </ProductsContext.Provider>
    );
};

