import minimumMeetingRooms from "./index";

describe("minimumMeetingRooms", () => {
    it("should return 2", () => {
        const result = minimumMeetingRooms([[1,4], [2,5], [7,9]]);

        expect(result).toBe(2);
    });

    it("should return 1", () => {
        const result = minimumMeetingRooms([[6,7], [2,4], [8,12]]);

        expect(result).toBe(1);
    });

    it("should return 2", () => {
        const result = minimumMeetingRooms([[1,4], [2,3], [3,6]]);

        expect(result).toBe(2);
    });

    it("should return 2", () => {
        const result = minimumMeetingRooms([[4,5], [2,3], [2,4], [3,5]]);

        expect(result).toBe(2);
    });
});
