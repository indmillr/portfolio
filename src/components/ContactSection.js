import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";

const ContactSectionStyle = styled.div`
  padding: 10rem;
`;

export default function ContactSection() {
  return (
    <div>
      <div className='container'>
        <SectionTitle heading='Contact' subheading='Get in touch' />
      </div>
    </div>
  );
}
