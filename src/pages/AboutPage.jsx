import styled from 'styled-components';
import { PageHero } from '../components/ui/PageHero';

import aboutImg from '/assets/imgs/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className="page section section-center">
        <img  src={aboutImg} alt='nice desk'/>
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline" />
          </div>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem et deleniti illo vel, natus nulla, facere quis non expedita possimus sint, quam eveniet molestias a maiores ipsum! Architecto, quis unde! Provident iure blanditiis est quis vitae totam aspernatur, eveniet animi. Reprehenderit numquam dolorem nesciunt libero dolores? Architecto illum rem illo!
          </p>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    width: 100%;
    display: block;
    height: 500px;
    object-fit: cover;
    border-radius: var(--radius);
  }

  p {
    line-height: 2;
    max-width: 50rem;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }

  .title {
    text-align: left;
  }

  .underline {
    margin-left: 0;
  }

  @media (min-width: 992px ) { 
    grid-template-columns: 1fr 1fr;    
  }
`

export default AboutPage
