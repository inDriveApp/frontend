import React from 'react';

import '../../styles/Tooltip.scss';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <div className={className}>
      {children}
      <span>{title}</span>
    </div>
  );
};

export default Tooltip;