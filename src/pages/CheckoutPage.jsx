import styled from 'styled-components';
import { PageHero } from '../components/ui/PageHero';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <h1>Checkout</h1>
      </Wrapper>
    </main>
  )
};

const Wrapper = styled.div`

`

export default CheckoutPage