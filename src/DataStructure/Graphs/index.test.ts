import Graphs from ".";

describe('Graphs', () => {
    it('Add a vertex to the graphs', () => {
        const graph = new Graphs();

        graph.insertVertex('Demo 1');

        expect(graph.containVertex('Demo 1')).toBeTruthy();
    });

    it('add two vertices and edge them together', () => {
        const graph = new Graphs();

        graph.insertVertex('Demo 1');
        graph.insertVertex('Demo 2');

        graph.insertEdges('Demo 1', 'Demo 2');

        expect(graph.getConnectedVertex('Demo 1')[0]).toBe('Demo 2');
    });

    it('remove a vertex', () => {
        const graph = new Graphs();

        graph.insertVertex('Demo 1');
        graph.insertVertex('Demo 2');

        graph.insertEdges('Demo 1', 'Demo 2');

        graph.removeVertex('Demo 1');

        expect(graph.containVertex('Demo 1')).toBeFalsy();
    })
});
