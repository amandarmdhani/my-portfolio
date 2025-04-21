import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, date, description, tech, image, link }) => {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-[50px] p-6 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl max-w-md mx-auto">
      <div className="overflow-hidden rounded-[40px]">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-[40px] transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="mt-5 space-y-2 text-center">
        <h3 className="text-2xl font-bold text-pink-700">{title}</h3>
        <p className="text-sm text-gray-500 italic">{date}</p>
        <p className="text-gray-700 text-base leading-relaxed">{description}</p>
        <div className="text-sm text-gray-600 mt-2">
          <span className="font-medium text-gray-800">Tech:</span> {tech.join(', ')}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-pink-600 hover:text-pink-800 font-medium transition"
        >
          View More <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
