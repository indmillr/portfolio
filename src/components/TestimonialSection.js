import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import PText from "./PText";
import styled from "styled-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import testimonials from "../assets/data/testimonials";

const TestimonialSectionStyles = styled.div`
  padding: 10rem 0;
  .testimonial__wrapper {
    text-align: center;
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }
  .testimonial__info {
    width: 100%;
    height: fit-content;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
  }
  .testimonial__desc {
    .para {
      text-align: center;
    }
  }
  .testimonial__name {
    margin-top: 4rem;
    font-family: "Montserrat Bold";
    font-size: 2.2rem;
  }
  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }
  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-active {
    opacity: 0;
  }
`;

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];

  function handlePrev() {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  }
  function handleNext() {
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  }

  return (
    <TestimonialSectionStyles>
      <div className='container'>
        <SectionTitle
          heading='Testimonials'
          subheading='See what everyone says'
        />
        <div className='testimonial__wrapper'>
          <SwitchTransition>
            <CSSTransition key={activeSlide.id} timeout={300} classNames='fade'>
              <div className='testimonial__info'>
                <div className='testimonial__desc'>
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className='testimonial__name'>{activeSlide.name}</h2>
                <p className='testimonial__title'>
                  {activeSlide.title}, <br />
                  {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className='arrows'>
          <div
            className='prev'
            onClick={handlePrev}
            role='button'
            tabIndex={0}
            onKeyDown={handlePrev}
          >
            <MdArrowBack></MdArrowBack>
          </div>
          <div
            className='next'
            onClick={handleNext}
            role='button'
            tabIndex={0}
            onKeyDown={handleNext}
          >
            <MdArrowForward></MdArrowForward>
          </div>
        </div>
      </div>
    </TestimonialSectionStyles>
  );
}
