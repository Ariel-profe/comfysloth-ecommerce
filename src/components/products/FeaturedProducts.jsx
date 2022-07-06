import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProductsContext } from '../../context/ProductsContext';
import { Loading, Error } from '../ui';
import { ProductCard } from './ProductCard';

export const FeaturedProducts = () => {

  const {loading, featuredProducts, productsError} = useContext(ProductsContext);
  

  return (
    <Wrapper className='section'>
      {loading && <Loading />}
      {productsError && <Error />}
      <div className="title"> 
        <h2>Featured Products</h2>
        <div className="underline" />
      </div>
      <div className="section-center featured">
        {
          featuredProducts.slice(0, 3).map(product => (
            <ProductCard 
              key={product.id}
              {...product}
            />
          ))
        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`
