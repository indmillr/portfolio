import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import ContactInfoItem from "./ContactInfoItem";
import SectionTitle from "./SectionTitle";

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    content: "";
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .left:hover {
    color: var(--red);
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  return (
    <ContactSectionStyle>
      <div className='container'>
        <SectionTitle heading='Contact' subheading='Get in touch' />
        <div className='contactSection__wrapper'>
          <div className='left'>
            <ContactInfoItem
              icon={<MdLocalPhone />}
              text='(417) 908-7165'
              link='tel:4179087165'
            />
            <ContactInfoItem
              icon={<MdEmail />}
              text='indmillr@gmail.com'
              link='mailto:indmillr@gmail.com'
            />
            <ContactInfoItem
              text='Nixa, MO USA'
              link='https://www.google.com/maps/place/Nixa,+MO+65714/@37.0464147,-93.312616,14z/data=!3m1!4b1!4m5!3m4!1s0x87cf6eed13ac8447:0xacf1a5ed53154eb7!8m2!3d37.0433863!4d-93.294353'
            />
          </div>
          <div className='right'>
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}
