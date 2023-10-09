interface ISend {
    createRandomNumber: number;
}

process.on('message', (obj: ISend) => {
    const returnedArr = generatedNumbers(obj.createRandomNumber);
});


function generatedNumbers(num: number) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(i + 1);
    }

    if (process.send) {
        process.send(arr);
    }
}
