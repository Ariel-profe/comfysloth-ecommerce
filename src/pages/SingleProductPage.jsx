import React, { useContext, useEffect } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';

import { ProductsContext } from '../context/ProductsContext';
import {Error, Loading, PageHero, Stars, ProductImages, AddToCart} from '../components';
import {formatPrice} from '../utils/helpers'
import { single_product_url } from '../utils/constants';


const SingleProductPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
    
  const {fetchSingleProduct, singleProductLoading, singleProductError, singleProduct} = useContext(ProductsContext);
  
  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
    }, [single_product_url, id]);

  useEffect(() => {
    if(singleProductError){
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [singleProductError]);

  const {
    id: sku,
    name,
    price,
    description,
    images,
    stock,
    stars,
    reviews,
    company
  } = singleProduct;

  return (
    <Wrapper>
      <PageHero title={name} product />
      {singleProductLoading && <Loading />} {singleProductError && <Error />}
      <div className="section section-center page">
        <Link to='/products' className='btn'> back to products</Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'>{formatPrice(price)}</h5>
            <p className='desc'>{description}</p>
            <p className='info'>
              <span>Available:</span>
              {stock > 0 ? 'In Stock' : 'Out of Stock'}
            </p>
            <p className='info'>
              <span>SKU:</span>  {sku}
            </p>
            <p className='info'>
              <span>Brand:</span> {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage