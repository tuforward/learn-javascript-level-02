/**                       Đếm số lượng số "1" trong mảng 2D
 * YÊU CẦU:
    +   Tạo hàm đếm số lượng số "1" trong mảng 2D.
*/

// --------------------------  CÁCH 1 ------------------------------- //
const countOnes_01 = function (array2D) {
    let dem = 0;

    array2D.forEach(array1D => {
        array1D.forEach(item => {
            if(item == 1) dem++;
        })
    })
    return dem;
}


let vidu_01 = countOnes_01([
    [1, 0],
    [0, 0],
]);

let vidu_02 = countOnes_01([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
]);

let vidu_03 = countOnes_01([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

// --------------------------  CÁCH 2 ------------------------------- //
function countOnes_02(array2D) {
    let ans = array2D.reduce((totalRow, row) => {
        let totalOnes = row.filter(col => col === 1).length;
        totalRow += totalOnes;
        return totalRow;
    }, 0);

    return ans;
}

let vidu_04 = countOnes_02([
    [1, 0],
    [0, 0],
]);

let vidu_05 = countOnes_02([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
]);

let vidu_06 = countOnes_02([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
]);

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);

/**
const test1 = countOnes([
    [1, 0],
    [0, 0],
]);

console.log(test1); // 1

const test2 = countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1],
]);

console.log(test2); // 7

const test3 = countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33],
]);
   
console.log(test3); // 2
 */