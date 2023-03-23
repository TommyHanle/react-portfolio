import React from 'react';
import './index.scss';

const ProjectCard = ({ image, title, description, technologies, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <p className="project-technologies">{technologies.join(', ')}</p>
      <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;
