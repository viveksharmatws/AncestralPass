"use client";
import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
} from "reactflow";

import "reactflow/dist/base.css";

import "@/tailwind.config";
import CustomNode from "./CustomnodeGlobal.jsx";

const nodeTypes = {
  custom: CustomNode,
};

const initNodes = [
  {
    id: "1",
    type: "custom",
    data: { name: "Eleanor Bennett", date: "13.02.2024", location: "Ohio US" },
    position: { x: 200, y: 0 },
  },
  {
    id: "2",
    type: "custom",
    data: {
      name: "Frank Pritchett",
      date: "13.02.2024",
      location: "Us, Callifornia",
    },

    position: { x: -200, y: 0 },
  },
  {
    id: "3",
    type: "custom",
    data: {
      name: "Jay Pritchet",
      date: "13.02.2024",
      location: "Branquilla, CO",
    },
    position: { x: 0, y: 200 },
  },

  {
    id: "4",
    type: "custom",
    data: {
      name: "DeDe Williams ",
      date: "13.02.2024",
      location: "Branquilla, CO",
    },
    position: { x: 500, y: 200 },
  },

  {
    id: "5",
    type: "custom",
    data: {
      name: "Claire Pritchett",
      date: "13.02.2024",
      location: "Branquilla, CO",
    },
    position: { x: 200, y: 400 },
  },
  {
    id: "6",
    type: "custom",
    data: {
      name: "Mitchell Pritchett",
      date: "13.02.2024",
      location: "Branquilla, CO",
    },
    position: { x: 200, y: 600 },
  },
  {
    id: "7",
    type: "custom",
    data: {
      name: "Joe Pritchett",
      date: "13.02.2024",
      location: "Branquilla, CO",
    },
    position: { x: 100, y: 800 },
  },
  {
    id: "8",
    type: "custom",
    data: {
      name: "Gloria Delgado",
      date: "13.02.2024",
      location: "Branquilla, CO",
    },
    position:{ x: 500, y: 500 },
  },
];

const initEdges = [
  {
    id: "e1-0",
    source: "1",
    target: "3",
       type: 'smoothstep',
    animated: true 
    
  },
  {
    id: "e1-1",
    source: "2",
       type: 'smoothstep',
    target: "3",
    animated: true 

  },
  {
    id: "e1-2",
    source: "1",
       type: 'smoothstep',
    target: "3",
    animated: true 

  },
  {
    id: "e1-3",
    source: "3",
       type: 'smoothstep',
    target: "5",
    animated: true 

  },
  {
    id: "e1-4",
    source: "4",
       type: 'smoothstep',
    target: "5",
    animated: true 

  },
  {
    id: "e1-5",
    source: "3",
       type: 'smoothstep',
    target: "6",
    animated: true 

  },
  {
    id: "e1-6",
    source: "3",
       type: 'smoothstep',
    target: "7",
    animated: true 

  },
  {
    id: "e1-7",
    source: "7",
       type: 'smoothstep',
    target: "8",
    animated: true 

  },
  
  {
    id: "e1-8",
    source: "4",
       type: 'smoothstep',
    target: "6",
    animated: true 

  },
 
];

const FamilytreeGlobal = () => {
  const [nodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div className="h-screen  mx-auto container tree w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-teal-50 w-full"
      >
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FamilytreeGlobal;
