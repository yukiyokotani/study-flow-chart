import type React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Flow, Node, CountNode, CheckPointNode } from './components';
import type { FlowNode, FlowEdge, CheckPoint } from './types';
import './App.css';

// Shadcn風のMUIテーマ
const theme = createTheme({
  typography: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
});

// サンプルデータ
const node1Items = ['アイテム A-1', 'アイテム A-2', 'アイテム A-3'];
const node2Items: string[] = [];

// Node 5のチェック観点
const node5CheckPoints: CheckPoint[] = [
  { label: '観点A', status: 'pass' },
  { label: '観点B', status: 'pass' },
  { label: '観点C', status: 'error' },
];

// ノード定義
const nodes: FlowNode[] = [
  {
    id: '1',
    x: 30,
    y: 20,
    width: 100,
    height: 32,
    component: ({ status }) => (
      <CountNode
        label="Node 1"
        count={node1Items.length}
        items={node1Items}
        status={status}
      />
    ),
  },
  {
    id: '2',
    x: 30,
    y: 90,
    width: 100,
    height: 32,
    status: 'inactive',
    blocksFlow: true,
    component: ({ status }) => (
      <CountNode
        label="Node 2"
        count={node2Items.length}
        items={node2Items}
        status={status}
      />
    ),
  },
  {
    id: '3',
    x: 180,
    y: 55,
    width: 100,
    height: 32,
    status: 'inactive',
    component: ({ status }) => <Node label="Node 3" status={status} />,
  },
  {
    id: '4',
    x: 350,
    y: 55,
    width: 100,
    height: 32,
    component: ({ status }) => <Node label="Node 4" status={status} />,
  },
  {
    id: '5',
    x: 510,
    y: 15,
    width: 150,
    height: 112,
    blocksFlow: true,
    component: () => <CheckPointNode label="Node 5" checkPoints={node5CheckPoints} />,
  },
  {
    id: '6',
    x: 700,
    y: 55,
    width: 100,
    height: 32,
    component: ({ status }) => <Node label="Node 6" status={status} />,
  },
  {
    id: '7',
    x: 180,
    y: 115,
    width: 100,
    height: 32,
    component: ({ status }) => <Node label="Node 7" status={status} />,
  },
];

// エッジ定義
const edges: FlowEdge[] = [
  { source: '1', target: '3' },
  { source: '2', target: '3' },
  { source: '3', target: '4' },
  { source: '7', target: '4' },
  { source: '4', target: '5' },
  { source: '5', target: '6' },
];

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="flow-container">
        <Flow nodes={nodes} edges={edges} width={800} height={170} />
      </div>
    </ThemeProvider>
  );
};

export default App;
