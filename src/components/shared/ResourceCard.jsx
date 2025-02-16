import React from 'react';

function ResourceCard({ title, description, url, icon }) {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card"
    >
      <span className="resource-icon">
        {typeof icon === 'string' ? icon : icon}
      </span>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
    </a>
  );
}

export default ResourceCard;