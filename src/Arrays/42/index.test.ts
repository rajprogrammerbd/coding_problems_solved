import maximumCpuLoad from "./index";

describe("maximumCpuLoad", () => {
    it("should return 7", () => {
        const result = maximumCpuLoad([[1,4,3], [2,5,4], [7,9,6]]);

        expect(result).toBe(7);
    });

    it("should return 15", () => {
        const result = maximumCpuLoad([[6,7,10], [2,4,11], [8,12,15]]);

        expect(result).toBe(15);
    });

    it("should return 8", () => {
        const result = maximumCpuLoad([[1,4,2], [2,4,1], [3,6,5]]);

        expect(result).toBe(8);
    });
});
