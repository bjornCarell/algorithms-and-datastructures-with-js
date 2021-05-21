class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  // accepts two vertices
  addEdge(vertext1, vertex2) {
  // should find in the adjacency list the key 
  // of vertex1 and push vertex2 to the array
  this.adjacencyList[vertext1].push(vertex2);
  // should find in the adjacency list the key 
  // of vertex2 and push vertex1 to the array
  this.adjacencyList[vertex2].push(vertext1);
  }

  // accepts two vertices
  removeEdge(vertex1, vertex2) {
    // should reassign the key of vertex1 to be an array
    // that does not contain vertex2
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    // should reassign the key of vertex2 to be an array
    // that does not contain vertex1
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  removeVertex(vertex) {
  //   should loop as long as there are any other vertices 
  //   in the adjacency list for that vertex
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop();  
      // inside the loop, call our removeEdge func with 
      // vertex we are removing and each key'
      this.removeEdge(vertex, adjacencyVertex);
    }
  //   delete the key in the adjacency list for that vertex
    delete this.adjacencyList[vertex];
  }

  // method should accept a starting node
  depthFirstSearchRecursive(start) {
    // create a list to store the end result
    // this list should be returned by the method
    let result = [];
    // create a list 
    let visited = {};
    // write a helper function which accepts a vertex
    const dfs = (vertex) => {
      // should return early if the vertex is empty
      if (!vertex) return;
      // should place input vertex in the visited list
      visited[vertex] = true;
      // should push vertex to result list
      result.push(vertex);
      // loop over all of the alues in the adjacencyList
      // (arrow function does not bind 'this')
      for (const connection of this.adjacencyList[vertex]) {
        // if any value has not been visited, invoke the 
        // helper function with that value/vertex
        if (!visited[connection]) dfs(connection);
      }
    }
    // Invoke the helper function
    dfs(start);
    // return results
    return result;
  }

  // accepts a starting node
  depthFirstSearchIterative(start) {
    // create a stack to help us keep track of verticies 
    let stack = [];
    // create a list to store the end result
    // the result should be returned by the funcnion
    let result = [];
    // Create an object to store visited vertecies 
    let visited = {};
    // add startinf node to the stack 
    stack.push(start);
    // to not initalize the vertex each time the loop runs
    let vertex;
    // while the stack has something in it:
    while (stack.length) {
      // - pop the next vertex from the stack
      vertex = stack.pop();
      // - if that vertex has not been visited yet: 
        if (!visited[vertex]) {
          // - mark as visited
          visited[vertex] = true;
          // - add it to the result list
          result.push(vertex);
          // - pushh all of its connections/neighbors into the stack
          for (let connection of this.adjacencyList[vertex]) {
            stack.push(connection);
          }
        }
    }
    // return the result list
    return result;
  }
}

const graph = new Graph();
graph.addVertex('Amsterdam');
graph.addVertex('Beirut');
graph.addVertex('Cape town');
graph.addVertex('Denver');
graph.addVertex('Edinburgh');
graph.addVertex('Frankfurt');

graph.addEdge('Amsterdam', 'Beirut');
graph.addEdge('Amsterdam', 'Cape town');
graph.addEdge('Beirut','Denver');
graph.addEdge('Cape town','Edinburgh');
graph.addEdge('Denver','Edinburgh');
graph.addEdge('Denver','Frankfurt');
graph.addEdge('Edinburgh','Frankfurt');

const recursive = graph.depthFirstSearchRecursive('Amsterdam'); 
// console.log({recursive}); // * recursive: [ 'Amsterdam', 'Beirut', 'Denver', 'Edinburgh', 'Cape town', 'Frankfurt' ]
const iterative = graph.depthFirstSearchIterative('Amsterdam'); 
// console.log({iterative}); // * iterative: [ 'Amsterdam', 'Cape town', 'Edinburgh', 'Frankfurt', 'Denver', 'Beirut' ]
