import type React from 'react';
import Chip from '@mui/material/Chip';
import type { EdgeLabelProps } from '../types';

const CONTAINER_WIDTH = 60;
const CONTAINER_HEIGHT = 24;

const statusColors: Record<string, { color: string; borderColor: string }> = {
  active: { color: '#10b981', borderColor: '#10b981' },
  warning: { color: '#f59e0b', borderColor: '#f59e0b' },
  error: { color: '#ef4444', borderColor: '#ef4444' },
};

export const EdgeLabel: React.FC<EdgeLabelProps> = ({ x, y, label, status }) => {
  const colors = status ? statusColors[status] : null;

  return (
    <foreignObject
      x={x - CONTAINER_WIDTH / 2}
      y={y - CONTAINER_HEIGHT / 2}
      width={CONTAINER_WIDTH}
      height={CONTAINER_HEIGHT}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Chip
          label={label}
          size="small"
          sx={{
            height: 20,
            fontSize: 11,
            fontWeight: 600,
            bgcolor: '#1a1a1a',
            color: colors?.color ?? '#e0e0e0',
            border: `1px solid ${colors?.borderColor ?? '#333'}`,
            '& .MuiChip-label': {
              px: 1,
            },
          }}
        />
      </div>
    </foreignObject>
  );
};
