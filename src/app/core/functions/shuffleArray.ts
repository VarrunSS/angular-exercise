export function ShuffleArray(elements: number[]): number[] {
    let randomArr = [...elements];
    let curr = randomArr.length;

    while (curr-- > 0) {
        const ind = Math.floor(Math.random() * curr);

        let temp = randomArr[curr];
        randomArr[curr] = randomArr[ind];
        randomArr[ind] = temp;
    }

    return randomArr;
}