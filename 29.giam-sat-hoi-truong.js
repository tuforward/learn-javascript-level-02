/**                 Giám sát hội trường
 * YÊU CẦU:
    +   Một bản đồ sàn nhà được sắp xếp như sau:
        -   Bốn phòng, tất cả đều dẫn vào hành lang.
        -   Không thể di chuyển giữa các phòng mà không vào hành lang trước.

    +   Tạo một hàm kiểm tra xem lối đi giữa các phòng có khả thi hay không. Hành lang sẽ được biểu diễn bằng ký tự 'H'.

    +   Ghi chú:
        -   Một tuyến đường có thể bắt đầu hoặc kết thúc ở hành lang.
        -   Tất cả các đầu vào đều là số từ 1 đến 4 hoặc chữ cái "H".
        -   Không có phòng nào bị lặp lại.
*/

function possiblePath(path) {
    // nếu chỉ có một phòng hoặc không có phòng nào
    if(path.length === 1 || path.indexOf("H") === -1) return true;

    for(let index = 0 ; index < path.length ; index++) {
        // Nếu đó là phòng
        if(path[index]  !== "H") {
            if(path[index - 1] !== "H" && path[index + 1] !== "H") {
                return false;
            }
        }
    }
    return true;
}

let vidu_01 = possiblePath([1, "H", 2, "H", 3, "H", 4]);
let vidu_02 = possiblePath(["H", 3, "H"]);
let vidu_03 = possiblePath([1, 2, "H", 3]);

let vidu_04 = possiblePath([1]);
let vidu_05 = possiblePath(["H"]);
let vidu_06 = possiblePath([]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("-------------------- edge case --------------------");

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);

/**
    possiblePath([1, "H", 2, "H", 3, "H", 4]) ➞ true

    possiblePath(["H", 3, "H"]) ➞ true

    possiblePath([1, 2, "H", 3]) ➞ false
 */