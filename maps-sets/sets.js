function valoresUnicos(arr) {
    const mySet = new Set(arr);
    console.log(mySet.size);
    return [...mySet];
}


const arr = [30, 30, 40, 5, 223, 2049, 3034, 5];


console.log(valoresUnicos(arr));