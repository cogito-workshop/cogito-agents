import {
  addEdge,
  Background,
  BackgroundVariant,
  type Connection,
  Controls,
  // MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  // useReactFlow,
} from '@xyflow/react';
import { useCallback } from 'react';
import '@xyflow/react/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function FlowEditor() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // const reactFlowInstance = useReactFlow();
  console.log(setNodes);

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges],
  );

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className="border rounded-lg relative"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
      <Controls />
      {/* <MiniMap /> */}
      <Background variant={BackgroundVariant.Dots} gap={10} size={1} />
    </div>
  );
}

export const FlowEditorWithProvider = () => {
  return (
    <ReactFlowProvider>
      <FlowEditor />
    </ReactFlowProvider>
  );
};
