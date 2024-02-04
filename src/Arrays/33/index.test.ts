import canAttendMettings from "./index";

describe('canAttendMettings', () => {
    it("should return false", () => {
        const result = canAttendMettings([[0, 30], [5, 10], [15, 20]]);

        expect(result).toBeFalsy();
    });

    it("should return true", () => {
        const result = canAttendMettings([[7, 10], [2, 4]]);

        expect(result).toBeTruthy();
    });
});
