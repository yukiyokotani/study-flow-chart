import type React from 'react';
import Chip from '@mui/material/Chip';
import type { EdgeLabelProps } from '../types';

const CONTAINER_WIDTH = 80;
const CONTAINER_HEIGHT = 30;

export const EdgeLabel: React.FC<EdgeLabelProps> = ({ x, y, label }) => {
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
            height: 22,
            fontSize: 12,
            fontWeight: 600,
            bgcolor: 'hsl(0, 0%, 98%)',
            color: 'hsl(240, 10%, 30%)',
            border: '1px solid hsl(240, 6%, 90%)',
            '& .MuiChip-label': {
              px: 1,
            },
          }}
        />
      </div>
    </foreignObject>
  );
};
