/**                 Tính tổng theo từng nhóm trong một mảng
 * YÊU CẦU:
    +   Cho một mảng gồm các phần tử là các mảng con. Hãy tính tổng giá trị của các phần tử trong mảng con.
*/

function sumEachRow(arr2D) {
    let ans = arr2D.map(arr1D => {
        return arr1D.reduce((sum, col) => sum += col, 0);
    });

    console.log(ans);
}

const numbers = [
    [1, 2],
    [3, 4],
    [5, 6],
];

let vidu_01 = sumEachRow(numbers);

/**
const numbers = [
  [1, 2],
  [3, 4],
  [5, 6],
];

    Trả về:
        [3, 7, 11];
*/