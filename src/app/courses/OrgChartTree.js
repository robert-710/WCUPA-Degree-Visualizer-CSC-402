'use client';
import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';
import orgChartData from './test.json';

export default function OrgChartTree() {
  const [mounted, setMounted] = useState(false);
  const [orgChart, setOrgChart] = useState(orgChartData);
  const [shouldCollapseNeighborNodes, setShouldCollapseNeighborNodes] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleCollapseNeighborNodes = () => {
    setShouldCollapseNeighborNodes((prevState) => !prevState);
  };

  if (!mounted || !orgChart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={toggleCollapseNeighborNodes}>
        {shouldCollapseNeighborNodes ? 'Expand All Nodes' : 'Collapse Neighbor Nodes'}
      </button>
      <div id="treeWrapper" style={{ width: '80em', height: '80em' }}>
        <Tree
          data={orgChart}
          orientation="horizontal"
          initialCollapsed={shouldCollapseNeighborNodes}
          pathFunc="elbow"
          separation={{
            siblings: 2,
            nonSiblings: 2,
          }}
          nodeSize={{
            x: 250,
            y: 100,
          }}
        />
      </div>
    </div>
  );
}
