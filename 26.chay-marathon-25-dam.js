/**                     Chạy Marathon 25 Dặm
 * YÊU CẦU:
    +   Mary muốn tham gia một cuộc marathon 25 dặm. Khi cô đăng ký tham gia marathon, cô nhận thấy tờ đăng ký không trực tiếp nêu chiều dài của marathon. Thay vào đó, chiều dài của marathon được liệt kê thành từng phần nhỏ, khác nhau. Hãy giúp Mary tìm ra chiều dài thực sự của cuộc marathon.


    +   Trả về true nếu marathon có chiều dài là 25 dặm, nếu không, trả về false.


    +    Ghi chú:
        -   Các phần tử trong mảng sẽ luôn là số nguyên.
        
        -   Các phần tử trong mảng có thể là số âm hoặc dương, nhưng vì khoảng cách âm không thể xảy ra, hãy tìm cách chuyển các số nguyên âm thành số nguyên dương.
        
        -   Trả về false nếu các đối số là mảng rỗng hoặc không chuyền vào mảng.
*/

function soAmtoSoDuong (number) {
    return Math.sqrt((number * number));  

    // vcl chỉ cần Math.abs là được :))
}

const marathonDistance = function (arr = []) {
    // nếu không khởi tạo giá trị sẵn cho arr thì dùng if(!arr || arr.length === 0)
    if(arr.length === 0) return false;
    let ans = arr.reduce((sum, item) => sum += soAmtoSoDuong(item), 0);
    
    return (ans === 25);
}

let vidu_01 = marathonDistance([1, 2, 3, 4]);
let vidu_02 = marathonDistance([1, 9, 5, 8, 2]);
let vidu_03 = marathonDistance([-6, 15, 4]);
let vidu_04 = marathonDistance([]);
let vidu_05 = marathonDistance();

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
console.log(vidu_05);

/**
    marathonDistance([1, 2, 3, 4]) ➞ false

    marathonDistance([1, 9, 5, 8, 2]) ➞ true

    marathonDistance([-6, 15, 4]) ➞ true

    marathonDistance([]) ➞ false

    marathonDistance() ➞ false
 */