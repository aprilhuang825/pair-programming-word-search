const transpose = function(matrix) {
    let newarr = [];
    for (let j = 0; j < matrix[0].length; j++) {
        newarr.push([]);
        for (let i = 0; i < matrix.length; i++) {
            newarr[j].push(matrix[i][j]);
        }
    }
    return newarr;
};

const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;

    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const horizontalbackwardsJoin = letters.map(ls => ls.reverse().join(''));
    const verticalbackwardsJoin = transpose(letters).map(ls => ls.reverse().join(''));

    for (const l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (const l2 of verticalJoin) {
        if (l2.includes(word)) return true;
    }
    for (const l3 of horizontalbackwardsJoin) {
        if (l3.includes(word)) return true;
    }
    for (const l4 of verticalbackwardsJoin) {
        if (l4.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch;