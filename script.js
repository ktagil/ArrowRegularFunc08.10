// TASK 1


// function getOddNums(m, n) {
//     for (let i = m; i <= n; i++) { if(i%2==1)
//            console.log(i)
//     }
// }    

// getOddNums(2,6)


// const getOddNums = (m, n) => {

//     for (let i = m; i <= n; i++) {
//         if (i % 2 == 1)

//             console.log(i)
//     }
// }

// getOddNums(2,6)







function getSumFromArray(n) {
    var res = 0;
    n.forEach(element => {
        res+= element
    });
    return res;
}

const getSumFromArrayArrow = (n) => {
    var res = 0;
    n.forEach(element => {
        res+= element
    });
    return res;
}




let n = [1, 2, 3, 4, 5,]
console.log(getSumFromArray(n));

// let n = [1, 2, 3, 4, 5,]
// console.log(getSumFromArrayArrow(n));


