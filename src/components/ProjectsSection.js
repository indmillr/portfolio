import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import projects from "../assets/data/projects";
import ProjectItem from "./ProjectItem";
import styled from "styled-components";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation]);

const ProjectsSectionStyle = styled.div`
  padding: 10rem 0;
  .projects__allitems {
    display: flex;
    gap: 3rem;
    margin-top: 5rem;
  }
  .swiper-containter {
    padding-top: 8rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: var(--deep-dark);
    z-index: 10;
    border: 1px solid var(--gray-1);
    right: 60px;
    left: auto;
    top: 10px;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 10px;
  }
  .swiper-button-prev {
    left: 10px;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .projects__allItems {
      flex-direction: column;
      max-width: 400px;
      margin: 0 auto;
      margin-top: 7rem;
      gap: 5rem;
      .projectItem__img {
        width: 100%;
      }
    }
  }
`;

export default function ProjectsSection() {
  return (
    <ProjectsSectionStyle>
      <div className='container'>
        <SectionTitle heading='Projects' subheading='Some of my recent works' />
        <div className='projects__allItems'>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            breakpoints={{
              // window >= 640px
              640: {
                slidesPerView: 1,
              },
              // window >= 768px
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {projects.map((project, index) => {
              if (index >= 5) return "";
              return (
                <SwiperSlide key={project.id}>
                  <ProjectItem
                    title={project.name}
                    img={project.img}
                    desc={project.desc}
                    tools={project.tools}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </ProjectsSectionStyle>
  );
}
