import type { ReactNode } from 'react';

export type NodeStatus = 'active' | 'inactive' | 'warning' | 'error';

export type FlowNode = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  status?: NodeStatus;
  component: (props: { status?: NodeStatus }) => ReactNode;
};

export type FlowEdge = {
  source: string;
  target: string;
  label?: string;
  labelStatus?: NodeStatus;
};

export type FlowProps = {
  nodes: FlowNode[];
  edges: FlowEdge[];
  width?: number;
  height?: number;
};

export type NodeProps = {
  label: string;
  status?: NodeStatus;
};

export type CheckPointNodeProps = {
  status?: NodeStatus;
};

export type EdgeLabelProps = {
  x: number;
  y: number;
  label: string;
  status?: NodeStatus;
};
