import React from "react";
import styled from "styled-components";
import FooterColumn from "./FooterColumn";
import PText from "./PText";

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    font-size: 0.5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className='container'>
        <div className='footer__col1'>
          <h1 className='footer__col1__title'>Ian Miller</h1>
          <PText>
            Following a continued passion for beautiful design and creative
            solutions to interesting problems.
          </PText>
        </div>
        <div className='footer__col2'>
          <FooterColumn
            heading='Site Nav'
            links={[
              {
                title: "Home",
                path: "/",
                type: "link",
              },
              {
                title: "About",
                path: "/about",
                type: "link",
              },
              {
                title: "Projects",
                path: "/projects",
                type: "link",
              },
              {
                title: "Contact",
                path: "/contact",
                type: "link",
              },
            ]}
          />
        </div>
        <div className='footer__col3'>
          <FooterColumn
            heading='Contact'
            links={[
              {
                title: "(417) 908-7165",
                path: "tel:1234567890",
              },
              {
                title: "indmillr@gmail.com",
                path: "mailto:indmillr@gmail.com",
              },
              {
                title: "Nixa, MO - USA",
                path: "http://google.com/maps",
              },
            ]}
          />
        </div>
        <div className='footer__col4'>
          <FooterColumn
            heading='Social'
            links={[
              {
                title: "LinkedIn",
                path: "https://www.linkedin.com/in/indmillr",
              },
              {
                title: "GitHub",
                path: "https://github.com/indmillr",
              },
              {
                title: "Facebook",
                path: "http://facebook.com",
              },
            ]}
          />
        </div>
      </div>
      <div className='copyright'>
        <div className='container'>
          <PText>© 2022 - Ian Miller | inspired by Web Cifar</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
