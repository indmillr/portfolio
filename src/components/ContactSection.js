import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className='container'>
        <SectionTitle heading='Contact' subheading='Get in touch' />
        <div className='contactSection__wrapper'>
          <div className='left'>
            <ContactInfoItem icon={<MdLocalPhone />} text='(123) 456-7890' />
            <ContactInfoItem icon={<MdEmail />} text='indmillr@gmail.com' />
            <ContactInfoItem text='Nixa, MO USA' />
          </div>
          <div className='right'>
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
