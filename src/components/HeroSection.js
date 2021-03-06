import React from "react";
import HeroImg from "../assets/images/hero.png";
import Button from "./Button";
import PText from "./PText";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.svg";
import styled from "styled-components";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialGithub,
} from "react-icons/ti";

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__intro {
      color: var(--highlight);
    }
    .hero__name {
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    width: 50px;
  }
  .hero__social {
    left: 50px;
    bottom: 10px;
  }
  .hero__scrollDown {
    right: 50px;
    bottom: 20px;
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 0rem;
      }
      li:hover {
        color: var(--red);
      }
      a {
        display: inline-block;
        font-size: 4rem;
        letter-spacing: 5px;
        margin-bottom: 1rem;
      }
    }
  }
}
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 50px;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 2rem;
              margin-bottom: 1.5rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      bottom: 60px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className='hero'>
        <div className='container'>
          <h1 className='hero__heading'>
            <span className='hero__intro'>Hello! My name is</span>
            <span className='hero__name'>Ian Miller</span>
          </h1>
          <div className='hero__img'>
            <img src={HeroImg} alt='' />
          </div>
          <div className='hero__info'>
            <PText>
              I design and create functional websites and interactive web apps
              and I am looking for an opportunity to put my skills to work.{" "}
            </PText>
            <Button btnLink='/projects' btnText='Check it out' />
          </div>
          <div className='hero__social'>
            <div className='hero__social__text'>
              <ul>
                <li>
                  <a
                    href='https://github.com/indmillr'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <TiSocialGithub className='icon' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/indmillr'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <TiSocialLinkedin className='icon' />
                  </a>
                </li>
                <li>
                  <a
                    href='https://facebook.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <TiSocialFacebook className='icon' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='hero__scrollDown'>
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt='' />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
