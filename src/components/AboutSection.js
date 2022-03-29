import React from "react";
import SectionTitle from "./SectionTitle";
import PText from "./PText";
import Button from "./Button";
import AboutImg from "../assets/images/about-sec-img.png";
import styled from "styled-components";

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection__left,
  .aboutSection__right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className='container'>
        <div className='aboutSection__left'>
          <SectionTitle
            className='section-title'
            subheading='Let me introduce myself'
            heading='About Me'
          />
          <PText>
            I am a freelance website designer and developer from Nixa, Missouri.
            I create professional websites. I love design and alwasys try to
            show unique views to the audience through my work.
          </PText>
          <div className='aboutSection__buttons'>
            <Button btnLink='/projects' btnText='Works' />
            <Button btnLink='/about' btnText='Read More' outline='true' />
          </div>
        </div>
        <div className='aboutSection__right'>
          <img src={AboutImg} alt='' />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
