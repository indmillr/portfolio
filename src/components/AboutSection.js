import React from "react";
import SectionTitle from "./SectionTitle";
import PText from "./PText";
import Button from "./Button";
import AboutImg from "../assets/images/about.png";
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
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  img {
    border: 2px solid var(--gray-1);
  }
  .aboutSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className='container'>
        <div className='aboutSection__left'>
          <SectionTitle
            subheading='Let me introduce myself'
            heading='About Me'
          />
          <PText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus et
            rem voluptatibus incidunt modi provident accusamus inventore.
            Commodi mollitia molestias fuga. Omnis exercitationem repellendus
            dignissimos ratione quaerat ullam dolor illum dolores.
          </PText>
          <div className='aboutSection__buttons'>
            <Button btnLink='/projects' btnText='My Projects' />
            <Button btnLink='/about' btnText='Learn More' outline='true' />
          </div>
        </div>
        <div className='aboutSection__right'>
          <img src={AboutImg} alt='' />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
