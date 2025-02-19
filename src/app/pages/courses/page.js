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
    setShouldCollapseNeighborNodes(prevState => !prevState);
  };

  if (!mounted || !orgChart) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <button onClick={toggleCollapseNeighborNodes}>
        {shouldCollapseNeighborNodes ? 'Expand All Nodes' : 'Collapse Neighbor Nodes'}
      </button>
      // There are more options listed in react-d3-tree documentation.
      <div id="treeWrapper" style={{ width: '80em', height: '80em' }}>
        <Tree
          data={orgChart}
          orientation="horizontal"  // Change to "vertical" to make tree vertical
          initialCollapsed={shouldCollapseNeighborNodes}  
          pathFunc="elbow" // Set lines 
          separation={{
            siblings: 2,  // Adjust the distance between sibling nodes
            nonSiblings: 2, // Adjust the distance between parent and child nodes
          }}
          nodeSize={{
            x: 250,  // Increase the horizontal space between nodes
            y: 100,  // Increase the vertical space between nodes
          }}
        />
      </div>
    </div>
  );
}
