import React from 'react';

// Website Maintenance
export const IconMaintenance = ({ color = 'white', size = 32 }) => (
  <i className="fas fa-laptop-code" style={{ color, fontSize: size }}></i>
);

// Website & App Development
export const IconDevelopment = ({ color = 'white', size = 32 }) => (
  <i className="fas fa-mobile-alt" style={{ color, fontSize: size }}></i>
);

// IT Support
export const IconSupport = ({ color = 'white', size = 32 }) => (
  <i className="fas fa-search" style={{ color, fontSize: size }}></i>
);

// 3rd Party AI Solution
export const IconAiSolution = ({ color = 'white', size = 32 }) => (
  <i className="fas fa-pencil-ruler" style={{ color, fontSize: size }}></i>
);
