console.clear();

class Graphs {
    private adjacencyMap: Record<string, string[]>;

    constructor () {
        this.adjacencyMap = {};
    }

    containVertex(key: string): boolean {
        return typeof this.adjacencyMap[key] !== 'undefined';
    }

    insertVertex(vertex: string): void {
        if (this.containVertex(vertex)) return;

        this.adjacencyMap[vertex] = [];
    }

    insertEdges(firstVertex: string, secondVertex: string): void {
        if (this.containVertex(firstVertex) && this.containVertex(secondVertex)) {
            this.adjacencyMap[firstVertex].push(secondVertex);
            this.adjacencyMap[secondVertex].push(firstVertex);
            return;
        }

        throw new Error('Vertex is not found');
    }

    removeVertex(vertex: string): void {
        if (!this.containVertex(vertex)) {
            throw new Error('Vertex is not available');
        }

        delete this.adjacencyMap[vertex];

        for (const key in  this.adjacencyMap) {
            this.adjacencyMap[key] = this.adjacencyMap[key].filter((v: string) => {
                if (v !== vertex) {
                    return v;
                }
            });
        }
    }

    getConnectedVertex(vertex: string): string[] {
        if (this.containVertex(vertex)) {
            return this.adjacencyMap[vertex];
        }

        throw new Error('Passed vertex is not available');
    }
}

export default Graphs;
