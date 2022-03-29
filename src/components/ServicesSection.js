import React from "react";
import SectionTitle from "./SectionTitle";
import ServicesSectionItem from "./ServicesSectionItem";

export default function ServicesSection() {
  return (
    <div>
      <SectionTitle heading='Services' subheading='What I will do for you' />
      <div className='services__allItems'>
        <ServicesSectionItem />
        <ServicesSectionItem />
        <ServicesSectionItem />
      </div>
    </div>
  );
}
