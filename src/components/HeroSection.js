import React from "react";
import HeroImg from "../assets/images/hero.png";
import Button from "./Button";
import PText from "./PText";

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
      </div>
    </div>
  );
}
