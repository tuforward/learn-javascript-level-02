/**                        Tổng Thể Tích của Tất Cả Các Hộp
 * YÊU CẦU:
    +   Cho một mảng các hộp, tạo một hàm trả về tổng thể tích của tất cả các hộp đó.

    -   Một hộp được biểu diễn bằng một mảng gồm ba phần tử: chiều dài, chiều rộng và 
    chiều cao.

    -   Ví dụ, **totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1])** sẽ trả về **266** vì (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

    -   Lưu ý:
        -   Nhập ít nhất 1 hộp.
        -   Mỗi hộp luôn có ba chiều: chiều dài, chiều rộng và chiều cao.
*/

const tongTheTichBox = (...restParams) => {
    // duyệt từng box
    let ans = restParams.reduce((total, box) => {

        // nhân các giá trị DÀI * RỘNG * CAO của 1 box
        let ofBox = box.reduce((mul, item) => mul *= item, 1); // giá trị mặc định của phép nhân là 1

        total += ofBox; // tổng các giá trị của các box con
        return total;
    }, 0);

    return ans;
}

let vidu_01 = tongTheTichBox([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]);
let vidu_02 = tongTheTichBox([2, 2, 2], [2, 1, 1]);
let vidu_03 = tongTheTichBox([1, 1, 1]);


console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

/**
    totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63

    totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10

    totalVolume([1, 1, 1]) ➞ 1
 */