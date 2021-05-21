import ReactFlow, { Background } from "react-flow-renderer";
import DashboardLayout from "layouts/DashboardLayout";
import {
  FunctionNode,
  MergeNode,
  PivotTableNode,
  SplitNode,
} from "components/nodes";

const elements = [
  {
    id: "1",
    type: "function",
    data: { label: "FUNCTION", type: "replace" },
    position: { x: 250, y: 5 },
  },
  {
    id: "2",
    type: "merge",
    data: { label: "MERGE" },
    position: { x: 250, y: 200 },
  },
  {
    id: "3",
    type: "pivot",
    data: { label: "PIVOT TABLE" },
    position: { x: 250, y: 400 },
  },
  {
    id: "4",
    type: "split",
    data: { label: "SPLIT" },
    position: { x: 250, y: 600 },
  },
  { id: "e1-2", source: "1", target: "2", animated: false },
  { id: "e2-3", source: "2", target: "3", animated: false },
  { id: "e3-4", source: "3", target: "4", animated: false },
];

const nodeTypes = {
  function: FunctionNode,
  pivot: PivotTableNode,
  merge: MergeNode,
  split: SplitNode,
};

export default function NewWorkflow() {
  return (
    <DashboardLayout>
      <div
        style={{
          width: "100%",
          height: "750px",
        }}
      >
        <ReactFlow elements={elements} nodeTypes={nodeTypes} snapToGrid>
          <Background variant="dots" gap={20} size={1} />
        </ReactFlow>
      </div>
    </DashboardLayout>
  );
}
