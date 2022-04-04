import React from "react";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";
import styled from "styled-components";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";

const ServicesItemStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className='container'>
        <SectionTitle heading='Services' subheading='What I will do for you' />
        <div className='services__allItems'>
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title={"Design"}
            desc={
              "From classy professional websites and landing pages to flashy, eye-catching SPAs, I can translate ideas into reality."
            }
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title='Development'
            desc='I provide maintenance and support for the continued function of a smooth and responsive user experience.'
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title='Applications'
            desc='Lightweight Single-Page Applications that are rich with features and design that will stand out.'
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
