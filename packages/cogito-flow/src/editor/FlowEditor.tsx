import {
  addEdge,
  applyNodeChanges,
  Background,
  BackgroundVariant,
  type Connection,
  Controls,
  Edge,
  NodeChange,
  OnNodesChange,
  type ProOptions,
  ReactFlow,
  ReactFlowInstance,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback, useRef, useState } from 'react';

import HelperLines from './HelperLines';
import { useDnD } from '@/hooks/useDnD';
import { debounce } from 'lodash-es';
import { getHelperLines } from '@/utils';
import { addWidgetViaWidgetType } from './addWidget';
import { WIDGET_MAP } from '@/widgets';
import { DELETE_KEY_CODE } from './constants';

const proOptions: ProOptions = { hideAttribution: true };

function FlowEditor() {
  const [nodes, setNodes] = useNodesState<CustomWidgetNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [helperLineVertical, setHelperLineVertical] = useState<
    number | undefined
  >(undefined);
  const [helperLineHorizontal, setHelperLineHorizontal] = useState<
    number | undefined
  >(undefined);
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();
  const [preventScrolling, setPreventScrolling] = useState(false);
  const [type] = useDnD();
  const [rfInstance, setRfInstance] =
    useState<ReactFlowInstance<CustomWidgetNode> | null>(null);

  const syncStatus = useCallback(async () => {
    if (rfInstance) {
      // const flow = rfInstance.toObject();
      // const { nodes } = flow;
      // console.log(nodes);
      // await db.pages.where('pageId').equals(pageId).modify({
      //   content: {
      //     nodes,
      //   },
      // });
      // localStorage.setItem(flowKey, JSON.stringify(flow));
    }
  }, [rfInstance]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const debounceSyncChanges = debounce((changes: NodeChange[]) => {
    syncStatus();
  }, 1000);

  const onDragOver = useCallback((ev: React.DragEvent) => {
    ev.preventDefault();

    ev.dataTransfer.dropEffect = 'move';
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      // const flow = JSON.parse(localStorage.getItem(flowKey));
      // if (flow) {
      // const { x = 0, y = 0, zoom = 1 } = flow.viewport;
      // setNodes(flow.nodes || []);
      // setViewport({ x, y, zoom });
      // }
    };

    restoreFlow();
  }, []);

  const onDrop = useCallback(
    (ev: React.DragEvent) => {
      ev.preventDefault();
      // check if the dropped element is valid
      if (!type) {
        return;
      }

      // project was renamed to screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = screenToFlowPosition({
        x: ev.clientX,
        y: ev.clientY,
      });

      const newNode = addWidgetViaWidgetType({
        type,
        position,
        data: { type: `${type}` },
      });

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type, setNodes],
  );

  const customApplyNodeChanges = useCallback(
    (changes: NodeChange[], nodes: CustomWidgetNode[]): CustomWidgetNode[] => {
      // reset the helper lines (clear existing lines, if any)
      setHelperLineHorizontal(undefined);
      setHelperLineVertical(undefined);
      // this will be true if it's a single node being dragged
      // inside we calculate the helper lines and snap position for the position where the node is being moved to
      if (
        changes.length === 1 &&
        changes[0].type === 'position' &&
        changes[0].dragging &&
        changes[0].position
      ) {
        const helperLines = getHelperLines(changes[0], nodes);
        // if we have a helper line, we snap the node to the helper line position
        // this is being done by manipulating the node position inside the change object
        changes[0].position.x =
          helperLines.snapPosition.x ?? changes[0].position.x;
        changes[0].position.y =
          helperLines.snapPosition.y ?? changes[0].position.y;

        // if helper lines are returned, we set them so that they can be displayed
        setHelperLineHorizontal(helperLines.horizontal);
        setHelperLineVertical(helperLines.vertical);
      }

      return applyNodeChanges(changes, nodes) as CustomWidgetNode[];
    },
    [],
  );

  const onNodesChange: OnNodesChange = useCallback(
    (changes) => {
      setNodes((nodes) => customApplyNodeChanges(changes, nodes));

      debounceSyncChanges(changes);
    },
    [setNodes, customApplyNodeChanges, debounceSyncChanges],
  );

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges],
  );

  // useEffect(() => {
  //   document.addEventListener('keydown', (ev: KeyboardEvent) => {
  //     console.log(ev.key);
  //   });
  // }, []);

  const handleNodeMouseEnter = useCallback(() => {
    setPreventScrolling(() => false);
  }, []);

  const handleNodeMouseLeave = useCallback(() => {
    setPreventScrolling(() => true);
  }, []);

  return (
    <div
      className="w-full h-full border rounded-lg relative"
      ref={reactFlowWrapper}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={setRfInstance}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeMouseEnter={handleNodeMouseEnter}
        onNodeMouseLeave={handleNodeMouseLeave}
        onConnect={onConnect}
        nodeTypes={WIDGET_MAP}
        fitView
        deleteKeyCode={DELETE_KEY_CODE}
        preventScrolling={preventScrolling}
        // zoomOnScroll={true}
        // panOnScroll={true}
        // minZoom={1}
        // maxZoom={1}
        proOptions={proOptions}
      >
        <Controls
          showZoom={false}
          showFitView={false}
          // style={{
          //   bottom: 24,
          // }}
        />
        {/* <MiniMap /> */}
        <Background variant={BackgroundVariant.Dots} gap={10} />
        <HelperLines
          horizontal={helperLineHorizontal}
          vertical={helperLineVertical}
        />
        {/* <Panel position="top-right">
          <div className="rounded-lg bg-white h-16 w-60 flex items-center px-3 shadow-lg">
            <Button onClick={() => {}} size="sm" variant="outline">
              RUN
            </Button>
          </div>
        </Panel> */}
      </ReactFlow>
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
