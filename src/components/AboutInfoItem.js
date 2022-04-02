import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin-top: 3rem;
  position: relative;
  .title {
    font-size: 2.4rem;
  }
    h1:hover {
      color: var(--red);
    }
  .items {
    display: flex;
    gap: 1.5rem;
    left: 18rem;
    margin-top: 1rem;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }
  @media only scren and (max-width: 768px) {
    flex-direction: column: 
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }

`;

export default function AboutInfoItem({
  title = "This is Title",
  link = "#",
  items = ["HTML", "CSS", "JS"],
}) {
  return (
    <AboutItemStyles>
      <a href={link} target='_blank' rel='noreferrer'>
        <h1 className='title'>{title}</h1>
      </a>
      <div className='items'>
        {items.map((item, index) => (
          <div className='item' key={index}>
            <PText>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
