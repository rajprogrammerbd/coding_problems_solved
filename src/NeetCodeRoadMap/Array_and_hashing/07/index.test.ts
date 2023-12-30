import isValidSudoku, { isValidSudokuOptimal } from "./index";

it('should return true', () => {
    const data = [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]];

    const result = isValidSudoku(data);
    const optimalSolution = isValidSudokuOptimal(data);

    expect(optimalSolution).toBeTruthy();
    expect(result).toBeTruthy();
});

it('should return false', () => {
    const data = [["8","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]];

    const optimal = isValidSudokuOptimal(data);
    const result = isValidSudoku(data);

    expect(optimal).toBeFalsy();
    expect(result).toBeFalsy();
});
