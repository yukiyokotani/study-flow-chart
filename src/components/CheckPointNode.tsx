import type React from 'react';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { green, red } from '@mui/material/colors';
import type { CheckPointNodeProps } from '../types';

export const CheckPointNode: React.FC<CheckPointNodeProps> = ({ label, checkPoints }) => {
  const hasError = checkPoints.some((cp) => cp.status === 'error');
  const nodeStatus = hasError ? 'error' : undefined;
  const className = ['node', nodeStatus].filter(Boolean).join(' ');

  return (
    <div
      className={className}
      style={{ flexDirection: 'column', alignItems: 'flex-start', padding: 8 }}
    >
      <div className="node-title">{label}</div>
      <div className="chip-list">
        {checkPoints.map((cp) => {
          const isError = cp.status === 'error';
          return (
            <Chip
              key={cp.label}
              label={cp.label}
              size="small"
              variant="outlined"
              icon={isError ? <ErrorIcon /> : <CheckCircleIcon />}
              sx={{
                bgcolor: isError ? 'rgba(239, 68, 68, 0.15)' : 'rgba(16, 185, 129, 0.15)',
                color: isError ? red[400] : green[400],
                borderColor: isError ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)',
                '& .MuiChip-icon': {
                  color: isError ? red[400] : green[400],
                },
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
