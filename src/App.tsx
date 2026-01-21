import type React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Flow, Node, CheckPointNode } from './components';
import type { FlowNode, FlowEdge } from './types';
import './App.css';

// Shadcn風のMUIテーマ
const theme = createTheme({
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  components: {
  },
});

// ノード定義
const nodes: FlowNode[] = [
  {
    id: '1',
    x: 50,
    y: 30,
    width: 150,
    height: 40,
    component: ({ error }) => <Node label="Node 1" error={error} />,
  },
  {
    id: '2',
    x: 50,
    y: 130,
    width: 150,
    height: 40,
    error: true,
    component: ({ error }) => <Node label="Node 2" error={error} />,
  },
  {
    id: '3',
    x: 250,
    y: 80,
    width: 150,
    height: 40,
    component: ({ error }) => <Node label="Node 3" error={error} />,
  },
  {
    id: '4',
    x: 460,
    y: 80,
    width: 150,
    height: 40,
    error: true,
    component: ({ error }) => <Node label="Node 4" error={error} />,
  },
  {
    id: '5',
    x: 670,
    y: 40,
    width: 160,
    height: 120,
    component: ({ error }) => <CheckPointNode error={error} />,
  },
  {
    id: '6',
    x: 860,
    y: 80,
    width: 150,
    height: 40,
    component: ({ error }) => <Node label="Node 6" error={error} />,
  },
];

// エッジ定義
const edges: FlowEdge[] = [
  { source: '1', target: '3' },
  { source: '2', target: '3' },
  { source: '3', target: '4', label: '100' },
  { source: '4', target: '5', label: '25' },
  { source: '5', target: '6' },
];

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flow-container">
        <Flow nodes={nodes} edges={edges} />
      </div>
    </ThemeProvider>
  );
};

export default App;
