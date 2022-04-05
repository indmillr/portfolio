import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import projectImg from "../assets/images/calc.jpg";

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  h3:hover {
    color: var(--red);
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  .projectItem__tools {
    margin-top: 1.5rem;
    font-size: 1.25rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = "Project Name",
  desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem.",
  tools = "",
  link = "#",
}) {
  return (
    <ProjectItemStyle>
      <Link
        to={{ pathname: {link} }}
        target='_blank'
        rel='noreferrer'
        className='projectItem__img'
      >
        <img src={img} alt='project img' />
      </Link>
      <div className='projectItem__info'>
        <Link to={ pathname:{link} } target='_blank' rel='noreferrer'>
          <h3 className='projectItem__title'>{title}</h3>
        </Link>
        <p className='projectItem__desc'>{desc}</p>
        <p className='projectItem__tools'>{tools}</p>
      </div>
    </ProjectItemStyle>
  );
}
