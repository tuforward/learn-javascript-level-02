/**                       Inverted Numbers (Đảo ngược giá trị của số)
 * YÊU CẦU:
    +   Viêt hàm invertedNumbers(array) truyền vào một mảng có các phần tử là các số bất kỳ, hãy đảo ngược giá trị từ âm sang dương, hoặc từ dương sang âm của các số trong mảng đó.

*/

//  ---------------------------------   CÁCH 1  ------------------------------------ //
const invertedNumbers = (arr) => {
    let ansArray = arr.map(item => {
        return (item - (item * 2));
    });

    return ansArray;
}

let vidu_01 = invertedNumbers([1, -10, -20, 15, 100, -30]);
let vidu_02 = invertedNumbers([-20, 30, 10, -25, -60, 20]);

console.log(vidu_01);
console.log(vidu_02);

console.log("-------------------------------------------------------------------------");
/**
    [1, -10, -20, 15, 100, -30] —> [-1, 10, 20, -15, -100, 30]

    [-20, 30, 10, -25, -60, 20] —> [20, -30, -10, 25, 60, -20]
 */

//  ---------------------------------   CÁCH 2  ------------------------------------ //
const invertedNumbers_02 = (array) => {
    const newArray = array.map((item) => -item);
    return newArray;
};
  
const test1 = [1, -10, -20, 15, 100, -30];
console.log(invertedNumbers_02(test1));
// Trả về: [-1, 10, 20, -15, -100, 30];
  
const test2 = [-20, 30, 10, -25, -60, 20];
console.log(invertedNumbers_02(test2));
// Trả về: [20, -30, -10, 25, 60, -20];

