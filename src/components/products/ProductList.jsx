import React from 'react';
import { useContext } from 'react';

import { FilterContext } from '../../context/FilterContext';
import {GridView, ListView } from '../filters';

export const ProductList = () => {

  const {filteredProducts, gridView} = useContext(FilterContext);

  if(filteredProducts.length < 1){
    return (
    <h5 style={{textTransform: 'none'}}>
      Sorry, no products matched your search...
    </h5>
    )
  }

  if(gridView === false){
    return <ListView products={filteredProducts} /> ;
  }
  

  return (
    <GridView products={filteredProducts}>

    </GridView>
  )
}
