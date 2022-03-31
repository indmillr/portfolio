import React from "react";
import Button from "../components/Button";
import PText from "../components/PText";
import AboutImg from "../assets/images/about-page-img.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About2() {
  return (
    <AboutPageStyles>
      <div className='container'>
        <div className='top-section'>
          <div className='left'>
            <p className='about__subheading'>
              Hi! I am <span>Ian Miller</span>
            </p>
            <h2 className='about__heading'>A freelance web developer</h2>
            <div className='about__info'>
              <PText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate, omnis. Ex nesciunt aliquid ducimus ab? Distinctio,
                corporis, cumque doloremque consequuntur iste expedita dicta sit
                aliquam fugit, sint perferendis praesentium iusto ab quasi.
                Beatae quos id adipisci, odit eos facere eius!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                quibusdam ut laborum. Quibusdam, exercitationem odit deserunt
                atque consectetur omnis animi facilis, fugit optio laudantium
                eos, dignissimos possimus tempora similique quos?
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                inventore cupiditate nemo exercitationem dicta fugiat quisquam
                blanditiis voluptatum sequi adipisci vel est aliquam rem fugit
                commodi dolor cum tempore, aperiam, expedita eius accusantium
                tempora eos officia qui. Porro, asperiores accusamus.
              </PText>
            </div>
            <Button btnText='Download Resume' btnLink='#' />
          </div>
          <div className='right'>
            <img src={AboutImg} alt='Ian Miller img' />
          </div>
        </div>
        <div className='about__info__items'>
          <div className='about__info__item'>
            <h1 className='about__info__heading'>Education</h1>
            <AboutInfoItem
              title='School'
              items={["Missouri State University"]}
            />
            <AboutInfoItem
              title='School'
              items={["Missouri State University"]}
            />
            <AboutInfoItem
              title='School'
              items={["Missouri State University"]}
            />
          </div>

          <div className='about__info__item'>
            <h1 className='about__info__heading'>Skills</h1>
            <AboutInfoItem
              title='FrontEnd'
              items={["HTML", "CSS", "JS", "REACT"]}
            />
            <AboutInfoItem
              title='School'
              items={["Missouri State University"]}
            />
            <AboutInfoItem
              title='School'
              items={["Missouri State University"]}
            />
          </div>

          <div className='about__info__item'>
            <h1 className='about__info__heading'>Experience</h1>
            <AboutInfoItem
              title='School'
              items={["Missouri State University"]}
            />
            <AboutInfoItem
              title='School'
              items={["Missouri State University"]}
            />
            <AboutInfoItem
              title='School'
              items={["Missouri State University"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
