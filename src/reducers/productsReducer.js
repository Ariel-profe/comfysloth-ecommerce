import { types } from "../types/types";



export const productsReducer = (state = {}, action) => {

    switch (action.type) {

        case types.uiOpenSidebar:
            return {
                ...state,
                isSidebarOpen: true
            }

        case types.uiCloseSidebar:
            return {
                ...state,
                isSidebarOpen: false
            }
        
        case types.getProductsBegin:
            return {
                ...state,
                productsLoading: true
            }
        
        case types.getProductsSuccess:
            const featured_Products = action.payload.filter(
                (product) => product.featured === true
              );
            return {
                ...state,
                productsLoading: false,
                products: action.payload,
                featuredProducts : featured_Products
            }
        
        case types.getProductsError:
            return {
                ...state,
                productsLoading: false,
                productsError: true
            }
        
        case types.getSingleProductBegin:
            return {
                ...state,
                singleProductLoading: true,
                singleProductError: false
            }
        
        case types.getSingleProductSuccess:
            return {
                ...state,
                singleProductLoading: false,
                singleProduct: action.payload
            }
        
        case types.getSingleProductError:
            return {
                ...state,
                singleProductLoading: false,
                singleProductError: true
            }
    
        default:
                return state;
    }
};