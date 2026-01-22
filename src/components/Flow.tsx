import type React from 'react';
import type { FlowProps, FlowNode } from '../types';
import { EdgeLabel } from './EdgeLabel';

// フローをブロックするノードIDを計算（アニメーション停止用）
// ノード自身がerrorまたはblocksFlowの場合のみ影響を受ける
// 下流への伝播はしない（エッジ単位で判定するため）
const getBlockedNodeIds = (nodes: FlowNode[]): Set<string> => {
  const blocked = new Set<string>();

  for (const node of nodes) {
    if (node.status === 'error' || node.blocksFlow) {
      blocked.add(node.id);
    }
  }

  return blocked;
};

// ベジェ曲線のパスを生成
const createEdgePath = (sourceNode: FlowNode, targetNode: FlowNode): string => {
  const sourceX = sourceNode.x + sourceNode.width;
  const sourceY = sourceNode.y + sourceNode.height / 2;
  const targetX = targetNode.x;
  const targetY = targetNode.y + targetNode.height / 2;
  const controlOffset = 50;

  return `M ${sourceX} ${sourceY} C ${sourceX + controlOffset} ${sourceY}, ${targetX - controlOffset} ${targetY}, ${targetX} ${targetY}`;
};

// エッジラベルの位置を計算（ベジェ曲線の中点 t=0.5）
const getEdgeLabelPosition = (
  sourceNode: FlowNode,
  targetNode: FlowNode
): { x: number; y: number } => {
  const controlOffset = 50;

  // ベジェ曲線の制御点
  const p0x = sourceNode.x + sourceNode.width;
  const p0y = sourceNode.y + sourceNode.height / 2;
  const p1x = p0x + controlOffset;
  const p1y = p0y;
  const p3x = targetNode.x;
  const p3y = targetNode.y + targetNode.height / 2;
  const p2x = p3x - controlOffset;
  const p2y = p3y;

  // 3次ベジェ曲線 t=0.5 の点: B(0.5) = 0.125*P0 + 0.375*P1 + 0.375*P2 + 0.125*P3
  const t = 0.5;
  const mt = 1 - t;
  const x = mt * mt * mt * p0x + 3 * mt * mt * t * p1x + 3 * mt * t * t * p2x + t * t * t * p3x;
  const y = mt * mt * mt * p0y + 3 * mt * mt * t * p1y + 3 * mt * t * t * p2y + t * t * t * p3y;

  return { x, y };
};

export const Flow: React.FC<FlowProps> = ({
  nodes,
  edges,
  width = 1200,
  height = 500,
}) => {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const blockedNodes = getBlockedNodeIds(nodes);

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {edges.map((edge) => {
        const source = nodeMap.get(edge.source);
        const target = nodeMap.get(edge.target);
        if (!source || !target) return null;

        const isBlocked = blockedNodes.has(edge.source);
        const labelPos = edge.label ? getEdgeLabelPosition(source, target) : null;

        return (
          <g key={`${edge.source}-${edge.target}`}>
            <path
              d={createEdgePath(source, target)}
              className={isBlocked ? 'edge edge-stopped' : 'edge'}
            />
            {edge.label && labelPos && (
              <EdgeLabel x={labelPos.x} y={labelPos.y} label={edge.label} status={edge.labelStatus} />
            )}
          </g>
        );
      })}

      {nodes.map((node) => (
        <foreignObject
          key={node.id}
          x={node.x}
          y={node.y}
          width={node.width}
          height={node.height}
        >
          {node.component({ status: node.status })}
        </foreignObject>
      ))}
    </svg>
  );
};
