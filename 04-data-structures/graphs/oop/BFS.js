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

  breathFirstSearch(start) {
    let queue = [start];
    let result = [];
    let visited = { 
      [start]: true, 
    };
    let vertex;

    while (queue.length) {
      vertex = queue.shift();
      result.push(vertex);

      for (let connection of this.adjacencyList[vertex]) {
        if (!visited[connection]) {
          visited[connection] = true;
          queue.push(connection);
        }
      }
    }
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

const bfs = graph.breathFirstSearch('Amsterdam');
console.log({bfs});