import React from "react";
import PText from "../components/PText";
import AboutImg from "../assets/images/about.png";
import styled from "styled-components";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import { saveAs } from "file-saver";

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
  .link:hover {
    color: var(--red);
  }
  button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    display: inline-block;
    cursor: pointer;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? "var(--gray-1)" : "var(--black)")};
  }
  button:hover {
    color: var(--red);
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    button {
      font-size: 1.8rem;
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

export default function About() {
  const fileRequest = () => {
    window.location = "../../assets/files/Resume--IanMiller.pdf";
  };

  return (
    <AboutPageStyles>
      <div className='container'>
        <div className='top-section'>
          <div className='left'>
            <p className='about__subheading'>
              Hi! I am <span>Ian Miller</span>
            </p>
            <h2 className='about__heading'>Designer & Developer</h2>
            <div className='about__info'>
              <PText>
                Hungry and self-motivated with a passion for writing code and a
                soft-spot for symmetry and color.
                <br />
                <br />
                I am seeking an opportunity to begin my dream career. I love to
                design and create things and I always look forward to solving
                challenging problems. My competitive edge keeps me eager to
                continue learning.
                <br />
                <br />
                My extensive experience in a professional setting has allowed me
                to hone my soft skills in a culture of team development and
                business growth and has created my ability to fluently
                communicate with any link of the business chain.
              </PText>
            </div>
            <button onClick={fileRequest}>Download Resume</button>
          </div>
          <div className='right'>
            <img src={AboutImg} alt='Ian Miller img' />
          </div>
        </div>
        <div className='about__info__items'>
          <div className='about__info__item'>
            <h1 className='about__info__heading'>Education</h1>
            <AboutInfoItem
              link='https://www.missouristateuniversity.edu'
              title='Missouri State University'
              items={["Accounting", "Finance"]}
            />
            <AboutInfoItem
              link='https://www.otc.edu'
              title='Ozarks Technical College'
              items={["Associate of Arts"]}
            />
          </div>
          <div className='about__info__item'>
            <h1 className='about__info__heading'>Certifications</h1>
            <AboutInfoItem
              title='Responsive Web Design'
              link='https://freecodecamp.org/certification/indmillr/responsive-web-design'
              items={["HTML", "CSS", "Accessibility"]}
            />
            <AboutInfoItem
              title='Javascript Alogorithms and Data Structures'
              link='https://freecodecamp.org/certification/indmillr/javascript-algorithms-and-data-structures'
              items={["JS/ES6", "Regex", "Debugging", "OOP"]}
            />
            <AboutInfoItem
              title='Frontend Dev Libraries'
              link='https://freecodecamp.org/certification/indmillr/front-end-development-libraries'
              items={["Bootstrap", "jQuery", "SASS", "React"]}
            />
          </div>
          <div className='about__info__item'>
            <h1 className='about__info__heading'>Professional Experience</h1>
            <AboutInfoItem
              title='Southern Rock Restaurants'
              link='https://freecodecamp.org/certification/indmillr/responsive-web-design'
              items={["General Manager", "2002-Present"]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}
