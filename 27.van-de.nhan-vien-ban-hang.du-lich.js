/**                   Vấn đề nhân viên bán hàng du lịch
 * YÊU CẦU:
    +   Một nhà du lịch có một số lượng thành phố để thăm. Anh ấy muốn tính toán tổng số lượng con đường có thể anh ấy đi qua, thăm mỗi thành phố một lần trước khi trở về nhà. Trả về tổng số lượng con đường có thể một nhà du lịch có thể đi qua, với n thành phố.

    +   Nếu chúng ta có các thành phố A, B và C, các con đường có thể là:
        A -> B -> C
        A -> C -> B
        B -> A -> C
        B -> C -> A
        C -> B -> A
        C -> A -> B

        =>  cung cấp 6 đường dẫn có thể đi.
*/

//  HOÁN VỊ ĐƯỜNG ĐI NÊN CẦN TÍNH GIAI THỪA
const path = (city) => {
    let conDuong = 1;
    
    for(let i = 2 ; i <= city ; i++) conDuong *= i;
    return conDuong;
}

let vidu_01 = path(4);
let vidu_02 = path(1);
let vidu_03 = path(9);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
/**
    paths(4) ➞ 24

    paths(1) ➞ 1

    paths(9) ➞ 362880
 */