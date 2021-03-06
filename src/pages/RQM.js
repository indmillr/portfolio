import React from "react";
import SectionTitle from "../components/SectionTitle";
import RQMItem from "../components/RQMItem";
import styled from "styled-components";

const RQMStyle = styled.div`
  padding: 10rem 0;
  .projects__allitems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-containter {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    border: 1px solid var(--gray-1);
    right: 60px;
    left: auto;
    top: 10px;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 10px;
  }
  .swiper-button-prev {
    left: 10px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
    }
  }
`;

export default function RQM() {
  return (
    <RQMStyle>
      <div className='container'>
        <SectionTitle heading='Random Quote Machine' subheading=' ' />
        <div className='projects__allItems'>
          <RQMItem />
        </div>
      </div>
    </RQMStyle>
  );
}
