/**                    Tìm Giá Trị Trung Bình của Tất Cả Các Chữ Số
 * YÊU CẦU:
    +   Tạo một hàm trả về giá trị trung bình của tất cả các chữ số.

    +   Lưu ý:
        - Giá trị trung bình sẽ luôn được làm tròn thành số nguyên (Và làm tròn xuống).

        - Giá trị trung bình của tất cả các chữ số là **tổng của các chữ số/số lượng chữ số.**
        
        - Ví dụ: giá trị trung bình của các chữ số 512 là (5+1+2)/3 = 8/3 = 2.
*/


const trungBinhTatCa = function (number) {
    number = number.toString();

    let lengthAverage = number.length;
    
    let ans = number.split("").reduce((sum, item) => sum += parseInt(item) / lengthAverage, 0);

    return ans;
}

let vidu_01 = trungBinhTatCa(42);
let vidu_02 = trungBinhTatCa(12345);
let vidu_03 = trungBinhTatCa(666);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

/**
    mean(42) ➞ 3

    mean(12345) ➞ 3

    mean(666) ➞ 6
*/