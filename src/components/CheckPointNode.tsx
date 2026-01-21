import type React from 'react';
import Chip from '@mui/material/Chip';
import CheckIcon from '@mui/icons-material/Check';
import type { CheckPointNodeProps } from '../types';

export const CheckPointNode: React.FC<CheckPointNodeProps> = ({ error }) => {
  const checkPoints = ['観点A', '観点B', '観点C'];

  return (
    <div
      className={error ? 'node error' : 'node'}
      style={{ flexDirection: 'column', alignItems: 'flex-start', padding: 12 }}
    >
      <div className="node-title">Node 5</div>
      <div className="chip-list">
        {checkPoints.map((point) => (
          <Chip
            key={point}
            label={point}
            size="small"
            icon={<CheckIcon />}
            sx={{
              bgcolor: 'hsl(143, 85%, 96%)',
              color: 'hsl(140, 100%, 27%)',
              border: '1px solid hsl(141, 79%, 85%)',
              '& .MuiChip-icon': {
                color: 'hsl(140, 100%, 27%)',
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};
