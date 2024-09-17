console.clear();

export type INTRODUCTION =
    "A"
    |"B"
    | "C"
    | "D"
    | "E"
    | "F"
    | "G"
    | "H"
    | "I"
    | "J"
    | "K"
    | "L"
    | "M"
    | "N"
    | "O"
    | "P"
    | "Q"
    | "R"
    | "S"
    | "T"
    | "U"
    | "V"
    | "W"
    | "X"
    | "Y"
    | "Z";

class AdjacencyList {
    public list: Map<INTRODUCTION, INTRODUCTION[]>;

    constructor () {
        this.list = new Map();
    }

    has(obj: INTRODUCTION): boolean {
        const get = this.list.has(obj);

        return get;
    }

    get(ob: INTRODUCTION): INTRODUCTION[] | undefined {
        return this.list.get(ob);
    }

    addVertex(newVertex: INTRODUCTION, ...old: INTRODUCTION[]) {
        const existNewVertex = this.has(newVertex);

        if (existNewVertex) {
            return;
        } else {
            const temp: INTRODUCTION[] = [];
            
            for (let i = 0; i < old.length; i++) {
                const old_current = old[i];
                const old_exist = this.has(old_current);

                if (!old_exist) {
                    continue;
                }

                const old_values = this.get(old_current)!;
                old_values.push(newVertex);
                temp.push(old_current);
            }

            this.list.set(newVertex, temp);
        }
    }
}

export default AdjacencyList;
