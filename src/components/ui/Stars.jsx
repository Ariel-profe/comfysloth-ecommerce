import React, { useMemo } from 'react';
import {BsStarFill, BsStar, BsStarHalf} from 'react-icons/bs';
import styled from 'styled-components';

export const Stars = ({stars, reviews}) => {

  const tempStars = Array.from({length: 5}, (_, i) => {
    const number = i + 0.5;
    return (
      <span key={i}> { stars >= i + 1 ? <BsStarFill /> : stars >= number ? <BsStarHalf /> : <BsStar /> }</span>
    )
  });

  return (
    <Wrapper>
      <div className="stars">
        {tempStars}
      </div>
      <p className="reviews">
        ({reviews} customer reviews)
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
  }
  margin-bottom: 0.5rem;
`


//  {/* Star 1 */}
//  <span> { stars >= 1 ? <BsStarFill /> : stars >= 0.5 ? <BsStarHalf /> : <BsStar /> }</span>
//  {/* End of stars */}
//  {/* Star 2 */}
//  <span> { stars >= 2 ? <BsStarFill /> : stars >= 1.5 ? <BsStarHalf /> : <BsStar /> }</span>
//  {/* End of stars */}
//  {/* Star 3 */}
//  <span> { stars >= 3 ? <BsStarFill /> : stars >= 2.5 ? <BsStarHalf /> : <BsStar /> }</span>
//  {/* End of stars */}
//  {/* Star 4 */}
//  <span> { stars >= 4 ? <BsStarFill /> : stars >= 3.5 ? <BsStarHalf /> : <BsStar /> }</span>
//  {/* End of stars */}
//  {/* Star 5 */}
//  <span> { stars === 5 ? <BsStarFill /> : stars >= 4.5 ? <BsStarHalf /> : <BsStar /> }</span>
//  {/* End of stars */}


