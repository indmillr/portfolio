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
            title={"Website Design"}
            desc={
              "I do ui/ux design for the webiste to provide a unique look and feel."
            }
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title='Web Dev'
            desc='I also develop the website for top performance.'
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title='App Dev'
            desc='I develop mobile applications with eye-catching ui.'
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
