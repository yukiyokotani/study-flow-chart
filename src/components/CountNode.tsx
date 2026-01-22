import type React from 'react';
import { useState } from 'react';
import Popover from '@mui/material/Popover';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import type { NodeStatus } from '../types';

type CountNodeProps = {
  label: string;
  count: number;
  items: string[];
  status?: NodeStatus;
};

export const CountNode: React.FC<CountNodeProps> = ({
  label,
  count,
  items,
  status,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const className = ['node', status && status !== 'active' && status]
    .filter(Boolean)
    .join(' ');

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'pointer' }}
      >
        <span>{label}</span>
        <span className="count-badge">{count}</span>
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleMouseLeave}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        disableRestoreFocus
        sx={{
          pointerEvents: 'none',
          '& .MuiPaper-root': {
            bgcolor: '#1a1a1a',
            color: '#fff',
            borderRadius: 2,
            border: '1px solid #333',
            boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
            minWidth: 180,
            maxHeight: 200,
            overflow: 'auto',
          },
        }}
      >
        <Typography
          sx={{
            px: 1.5,
            py: 1,
            fontSize: 11,
            fontWeight: 600,
            color: '#888',
            borderBottom: '1px solid #333',
          }}
        >
          {label}
        </Typography>
        <List dense disablePadding>
          {items.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                py: 0.5,
                px: 1.5,
                '&:hover': {
                  bgcolor: '#292929',
                },
              }}
            >
              <ListItemText
                primary={item}
                primaryTypographyProps={{
                  fontSize: 12,
                  color: '#e0e0e0',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
};
