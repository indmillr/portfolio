import React from "react";
import HeroImg from "../assets/images/hero.png";
import Button from "./Button";
import PText from "./PText";
import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
import ScrollDownArrow from "../assets/images/scroll-down-arrow-.svg";

export default function HeroSection() {
  return (
    <div>
      <div className='container'>
        <h1 className='hero__heading'>
          <span>Hello this is</span>
          <span>Ian Miller</span>
        </h1>
        <div className='hero__img'>
          <img src={HeroImg} alt='' />
        </div>
        <div className='hero__info'>
          <PText>
            I love to design and make new web experiences for people.
          </PText>
          <Button btnLink='/projects' btnText='See my Works' />
        </div>
        <div className='hero__social'>
          <div className='hero__social__indicator'>
            <p>Follow</p>
            <img src={SocialMediaArrow} alt='' />
          </div>
          <div className='hero_social_text'>
            <ul>
              <li>
                <a
                  href='https://github.com/indmillr'
                  target='_blank'
                  rel='noreferrer'
                >
                  GH
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/indmillr'
                  target='_blank'
                  rel='noreferrer'
                >
                  LI
                </a>
              </li>
              <li>
                <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                  FB
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
  );
}
