/**                        Thống kê cơ bản: Trung vị
 * YÊU CẦU:
    +   Trung vị của một nhóm số là số ở giữa khi nhóm được sắp xếp.

    +   Nếu kích thước của nhóm là chẵn, trung vị là trung bình cộng của hai số ở giữa.

    +    Cho một dãy số đã sắp xếp, trả về giá trị trung bình (được làm tròn đến một chữ số thập phân nếu giá trị trung bình không phải là số nguyên).
*/

//  -------------------- CÁCH 1 ----------------------------- //
const thongKeTrungVi_01 = (arr) => {
    const lengthOfArray = arr.length;

    if(lengthOfArray === 0) return 0;

    if(lengthOfArray === 1) return arr[0];

    if(lengthOfArray % 2 == 0) {
        const rightIndex = lengthOfArray / 2;
        const leftIndex  = rightIndex - 1;

        let ans =  (arr[rightIndex] + arr[leftIndex]) / 2;
        
        ans = ans.toFixed(1);
        return ans;
    }

    // case: độ dài của array là lẻ
    const middleIndex = Math.floor(lengthOfArray / 2);
    return arr[middleIndex];
}


let vidu_01 = thongKeTrungVi_01([1, 2, 4, 5, 6, 8, 8, 8, 10]);
let vidu_02 = thongKeTrungVi_01([2, 2, 6, 8, 8, 10, 10]);
let vidu_03 = thongKeTrungVi_01([1, 2, 2, 4, 7, 8, 9, 10]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

/**
 *  [1, 2, 4, 5, 6, 8, 8, 8, 10] —> 6

    [2, 2, 6, 8, 8, 10, 10] —> 8

    [1, 2, 2, 4, 7, 8, 9, 10] —> 5.5
 */

console.log("---------------------------------------------------------");

//  -------------------- CÁCH 2 ----------------------------- //
const tinhTongArray = (arr) => {
    // tính tổng các giá trị trong mảng lun
    let sumOfArray = arr.reduce((sum, giaTri) => sum += giaTri);
    return sumOfArray;
}

const mean = (arr) => {
    let lengthOfArray = arr.length;
    return tinhTongArray(arr) / lengthOfArray;   
}

const thongKeTrungVi_02 = function (arr) {
    const lengthOfArray = arr.length - 1;

    let numberLeft  = arr[Math.floor(lengthOfArray / 2)];
    let numberRight = arr[Math.ceil(lengthOfArray / 2)];

    return mean([numberLeft, numberRight]);
}

let vidu_04 = thongKeTrungVi_02([1, 2, 4, 5, 6, 8, 8, 8, 10]);
let vidu_05 = thongKeTrungVi_02([2, 2, 6, 8, 8, 10, 10]);
let vidu_06 = thongKeTrungVi_02([1, 2, 2, 4, 7, 8, 9, 10]);

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);