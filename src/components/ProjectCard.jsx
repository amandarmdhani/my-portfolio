import React from 'react';

const ProjectCard = ({ title, date, description, tech, image, link }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-md mx-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 text-left">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <p className="mb-2">{description}</p>
        <p className="text-sm text-gray-700">Tech: {tech.join(', ')}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
            View More
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
