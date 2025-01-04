import { ReactFlowProvider } from '@xyflow/react';
import { AgentFlowWidget } from './AgentFlowWidget';

export const AgentFlow = () => {
  return (
    <ReactFlowProvider>
      <AgentFlowWidget />
    </ReactFlowProvider>
  );
};
