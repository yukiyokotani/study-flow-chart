import type React from 'react';
import type { NodeProps } from '../types';

export const Node: React.FC<NodeProps> = ({ label, status }) => {
  const className = ['node', status && status !== 'active' && status]
    .filter(Boolean)
    .join(' ');
  return <div className={className}>{label}</div>;
};
