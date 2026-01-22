import type React from 'react';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { green } from '@mui/material/colors';
import type { CheckPointNodeProps } from '../types';

export const CheckPointNode: React.FC<CheckPointNodeProps> = ({ label, status }) => {
  const checkPoints = ['観点A', '観点B', '観点C'];
  const className = ['node', status && status !== 'active' && status]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={className}
      style={{ flexDirection: 'column', alignItems: 'flex-start', padding: 8 }}
    >
      <div className="node-title">{label}</div>
      <div className="chip-list">
        {checkPoints.map((point) => (
          <Chip
            key={point}
            label={point}
            size="small"
            variant="outlined"
            icon={<CheckCircleIcon />}
            sx={{
              bgcolor: 'rgba(16, 185, 129, 0.15)',
              color: green[400],
              borderColor: 'rgba(16, 185, 129, 0.3)',
              '& .MuiChip-icon': {
                color: green[400],
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};
