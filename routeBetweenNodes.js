// Given a directed graph, design an algorithm to find out whether
// there is a route between two nodes.  

// Google "directed graph" and look under images for visual examples.

// (Bonus: Write both DFS and BFS methods. You'll have to comment one)   

//  Here is a test graph: (please be sure to remove this dummy data before running tests)  

// const graph = {
//   a: {
//     value: 'a',
//     edges: []
//   },
//   b: {
//     value: 'b',
//     edges: []
//   },
//   c: {
//     value: 'c',
//     edges: []  },
//   d: {
//     value: 'd',
//     edges: []
//   },
//   e: {
//     value: 'e',
//     edges: []
//   },
// }; 


// graph.a.edges.push(graph.b, graph.d, graph.e);
// graph.b.edges.push(graph.a, graph.e);
// graph.d.edges.push(graph.e);
// graph.e.edges.push(graph.c, graph.a);
// console.log(routeBetweenNodes(graph.a, graph.c)); // true
// console.log(routeBetweenNodes(graph.c, graph.a)); // false 
function routeBetweenNodes(node1, node2) {
  for (let prop in node1) {
    console.log(node1[prop]);
  }
}


const graph = {
  a: {
    value: 'a',
    edges: []
  },
  b: {
    value: 'b',
    edges: []
  },
  c: {
    value: 'c',
    edges: []
  },
  d: {
    value: 'd',
    edges: []
  },
  e: {
    value: 'e',
    edges: []
  },
};


graph.a.edges.push(graph.b, graph.d, graph.e);
graph.b.edges.push(graph.a, graph.e);
graph.d.edges.push(graph.e);
graph.e.edges.push(graph.c, graph.a);
// console.log(graph);
// console.log();
// console.log(graph.a.edges);
console.log(routeBetweenNodes(graph.a, graph.c)); // true
// console.log(routeBetweenNodes(graph.c, graph.a)); // false 