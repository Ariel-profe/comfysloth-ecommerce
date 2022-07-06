 
import {types} from '../types/types';

export const filterReducer = (state, action) => {

    switch (action.type) {
        case types.loadProducts:

        let max_Price = action.payload.map( product => product.price);
        max_Price = Math.max(...max_Price)
        
            return {
                ...state,
                allProducts : [...action.payload],
                filteredProducts: [...action.payload],
                filters: {
                    ...state.filters,
                    maxPrice: max_Price,
                    price: max_Price
                }
            }
        
        case types.setGridView:
            return {
                ...state,
                gridView: true
            }

        case types.setListView:
            return {
                ...state,
                gridView: false
            }
        
        case types.updateSort:
            return {
                ...state,
                sort: action.payload
            }
        
        case types.sortProducts:
            const {sort, filteredProducts} = state;

            let tempProducts = [...filteredProducts];

            if(sort === 'price-lowest'){
                tempProducts = tempProducts.sort( (a,b) => a.price - b.price)
            }
            if(sort === 'price-highest'){
                tempProducts = tempProducts.sort( (a,b) => b.price - a.price)
            }
            if(sort === 'name-a'){
                tempProducts = tempProducts.sort( (a,b) => a.name.localeCompare(b.name))
            }
            if(sort === 'name-z'){
                tempProducts = tempProducts.sort( (a,b) => b.name.localeCompare(a.name))
            }

            return {
                ...state,
                filteredProducts : tempProducts
            }
        
        case types.updateFilters:
            const { name, value } = action.payload
            return { ...state, filters: { ...state.filters, [name]: value } }
        
        case types.filterProducts:
            const { allProducts } = state
            const { text, category, company, color, price, shipping } = state.filters
            let temp_Products = [...allProducts];

            // filtering products
            // text
            if (text) {
            temp_Products = temp_Products.filter((product) =>{
                return product.name.toLowerCase().startsWith(text)
            })
            }
            // category
            if (category !== 'all') {
            temp_Products = temp_Products.filter(
                (product) => product.category === category
            )
            }
            // company
            if (company !== 'all') {
                temp_Products =  temp_Products.filter(
                  (product) => product.company === company
                )
            }

            // colors
            if(color !== 'all'){
                temp_Products = temp_Products.filter( product => {
                    return product.colors.find((c) => c === color)
                })
            }

            // price
            temp_Products = temp_Products.filter( product => product.price <= price)

            // shipping
            if(shipping){
                temp_Products =  temp_Products.filter(
                    (product) => product.shipping === true
                  )
            }
            return {
                ...state,
                filteredProducts: temp_Products 
            }
        
        case types.clearFilters:
            return {
                ...state,
                filters: {
                ...state.filters,
                text: '',
                company: 'all',
                category: 'all',
                color: 'all',
                price: state.filters.maxPrice,
                shipping: false
                }
            }
        default: 
           return state;
    }
};