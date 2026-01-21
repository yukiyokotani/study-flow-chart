import type { ReactNode } from 'react';

export type FlowNode = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  error?: boolean;
  component: (props: { error?: boolean }) => ReactNode;
};

export type FlowEdge = {
  source: string;
  target: string;
  label?: string;
};

export type FlowProps = {
  nodes: FlowNode[];
  edges: FlowEdge[];
  width?: number;
  height?: number;
};

export type NodeProps = {
  label: string;
  error?: boolean;
};

export type CheckPointNodeProps = {
  error?: boolean;
};

export type EdgeLabelProps = {
  x: number;
  y: number;
  label: string;
};
