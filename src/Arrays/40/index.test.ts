import conflictingAppointments from "./index";

describe('conflictingAppointments', () => {
    it("should return false", () => {
        const result = conflictingAppointments([[1,4], [2,5], [7,9]]);

        expect(result).toBeFalsy();
    });

    it("should return true", () => {
        const result = conflictingAppointments([[6,7], [2,4], [8,12]]);

        expect(result).toBeTruthy();
    });

    it("should return false", () => {
        const result = conflictingAppointments([[4,5], [2,3], [3,6]]);

        expect(result).toBeFalsy();
    });
});
