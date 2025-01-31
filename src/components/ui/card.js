import React from 'react';

export const Card = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="card-header">
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
);

export const CardTitle = ({ children, className }) => (
  <h2 className={className}>
    {children}
  </h2>
);
