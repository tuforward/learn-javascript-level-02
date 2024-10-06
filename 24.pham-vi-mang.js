/**                        Kiểm tra có phải là một hình?
 * YÊU CẦU:
    +   Viết một hàm nhận vào hai giá trị bắt đầu (startNum) và kết thúc (endNum), và trả về một mảng chứa tất cả các số trong khoảng đó, bao gồm cả hai giá trị bắt đầu và kết thúc.

    +   Các số trong mảng được sắp xếp theo thứ tự tăng dần.
*/  

function inclusiveArray(a, b) {
    let ans = [a];
    for(let item = a+1 ; item <= b ; item++) ans.push(item);

    return ans;
}

let vidu_01 = inclusiveArray(1, 5);
let vidu_02 = inclusiveArray(2, 8);
let vidu_03 = inclusiveArray(10, 20);
let vidu_04 = inclusiveArray(17, 5);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
/**
    inclusiveArray(1, 5) ➞ [1, 2, 3, 4, 5]

    inclusiveArray(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

    inclusiveArray(10, 20) ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    inclusiveArray(17, 5) ➞ [17]
 */