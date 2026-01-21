import type React from 'react';
import type { NodeProps } from '../types';

export const Node: React.FC<NodeProps> = ({ label, error }) => {
  return <div className={error ? 'node error' : 'node'}>{label}</div>;
};
