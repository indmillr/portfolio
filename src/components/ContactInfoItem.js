import React from "react";
import { MdPlace } from "react-icons/md";
import styled from "styled-components";
import PText from "./PText";

const ItemStyle = styled.div`
  padding: 2rem;
  background-color: var(--deep-dark);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    background-color: var(--gray-2);
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 3.5rem;
  }
  a {
    color: var(--red);
  }
  a:hover {
    color: var(--red);
  }
`;

export default function ContactInfoItem({
  icon = <MdPlace></MdPlace>,
  text = "This is INFO",
  link = "#",
}) {
  return (
    <ItemStyle>
      <div className='icon'>{icon}</div>
      <div className='info'>
        <a href={link}>
          <PText>{text}</PText>
        </a>
      </div>
    </ItemStyle>
  );
}
