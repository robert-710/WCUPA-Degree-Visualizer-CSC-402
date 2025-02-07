'use client';
import React, { useEffect, useState } from 'react';
import Tree from 'react-d3-tree';

// Import the JSON data directly
import orgChartData from './test.json'; // Adjust path according to your structure

export default function OrgChartTree() {
  const [mounted, setMounted] = useState(false);
  const [orgChart, setOrgChart] = useState(orgChartData); // Use the imported data
  const [shouldCollapseNeighborNodes, setShouldCollapseNeighborNodes] = useState(true); // State for collapsing nodes

  useEffect(() => {
    setMounted(true); // Indicate that the component has mounted
  }, []);

  // Function to toggle collapsing of neighbor nodes
  const toggleCollapseNeighborNodes = () => {
    setShouldCollapseNeighborNodes(prevState => !prevState);
  };

  if (!mounted || !orgChart) {
    return <div>Loading...</div>; // Optionally, show a loading state
  }

  return (
    <div>
      <button onClick={toggleCollapseNeighborNodes}>
        {shouldCollapseNeighborNodes ? 'Expand All Nodes' : 'Collapse Neighbor Nodes'}
      </button>
      
      <div id="treeWrapper" style={{ width: '80em', height: '80em' }}>
        <Tree
          data={orgChart}
          orientation="horizontal"  // Set the tree layout to horizontal
          initialCollapsed={shouldCollapseNeighborNodes}  // Collapse or expand based on state
          pathFunc="elbow"         // Set lines to be straight
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
