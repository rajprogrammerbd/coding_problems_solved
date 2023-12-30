function removeSpecialCharacters(inputString: string) {
    // Use a regular expression to replace all non-digit and non-alphanumeric characters
    // with an empty string
    return inputString.replace(/[^0-9]/g, '');
}

export default function isValidSudoku(board: string[][]): boolean {
    let rowHash = new Map<string, { row: number, column: number }>();
    const columnHash = new Map<string, { row: number, column: number }>();

    for (let i = 0; i < board.length; i++) {
        const backwordsIdx = board.length - 1 - i;

        for (let j = 0; j < board[i].length; j++) {
            // check rows
            const searchValueRow = removeSpecialCharacters(board[i][j]);

            if (searchValueRow !== "") {
                const searchInRowHash = rowHash.has(searchValueRow);
            
                if (searchInRowHash) {
                    return false;
                }

                // added to the value to rowHash.
                rowHash.set(board[i][j], { row: i, column: j });
            }

            // Column check
            const searchValueColumn = removeSpecialCharacters(board[j][backwordsIdx]);

            if (searchValueColumn !== "") {
                const searchInColumnHash = columnHash.has(searchValueColumn);
            
                if (searchInColumnHash) {
                    return false;
                }
    
                // added to the value to rowHash.
                columnHash.set(board[j][backwordsIdx], { row: backwordsIdx, column: j });
            }
        }

        rowHash.clear();
        columnHash.clear();
    }

    let boxHash = new Map<string, boolean>();

    function addValueToHash(val: string): boolean {
        const searchValue = removeSpecialCharacters(val);

        if (searchValue === "") {
            return true;
        }

        const search = boxHash.has(searchValue);

        if (search) {
            return false;
        } else {
            boxHash.set(val, true);
            return true;
        }
    }

    let level = 0;
    while (level <= board.length) {
        if (board[level] !== undefined) {
            for (let k = 0; k < board[level].length; k = k + 2) {
                const condition1 = addValueToHash(board[level][k]) && addValueToHash(board[level][k + 1]) && addValueToHash(board[level][k + 2]);
                const condition2 = addValueToHash(board[level + 1][k]) && addValueToHash(board[level + 1][k + 1]) && addValueToHash(board[level + 1][k + 2]);
                const condition3 = addValueToHash(board[level + 2][k]) && addValueToHash(board[level + 2][k + 1]) && addValueToHash(board[level + 2][k + 2]);
    
                if (!(condition1 && condition2 && condition3)) {
                    return false;
                }

                boxHash.clear();
                k++;
            }
        }

        level = level + 3;
    }

    return true;
};

export function isValidSudokuOptimal(board: string[][]): boolean {
    const set = new Set()

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            const cell = board[i][j]
            if(cell === '.') continue
            const row = `row: ${i}, value: ${cell}`
            const column = `column: ${j}, value: ${cell}`
            const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            const box = `boxNumber: ${boxNumber}, value: ${cell}`
            if(set.has(row) || set.has(column) || set.has(box)) return false
            set.add(row).add(column).add(box)
        }
    }
    return true
};