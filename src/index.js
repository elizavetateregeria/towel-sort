// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const result = matrix.reduce((acc, cur, i) => {
        cur.sort((a, b) => (i % 2 === 0 ? a - b : b - a)).map((el) =>
            acc.push(el)
        );
        return acc;
    }, []);
    return result;
};
