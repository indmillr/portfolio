import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";
import SectionTitle from "../components/SectionTitle";
import ProjectInfo from "../assets/data/projects";

const ProjectsStyles = styled.div`
  padding: 10rem 0;

`;

export default function Projects() {
  const [projectData, setProjectData] = useState(ProjectInfo);

  return (
    <ProjectsStyles>
      <div className='container'>
        <SectionTitle heading='Projects' subheading='Some of my recent works' />
        <div className='projects__searchbar'>
          <form>
            <input type='text' />
            <MdSearch />
          </form>
        </div>
        <div className='projects__allItems'>
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}
