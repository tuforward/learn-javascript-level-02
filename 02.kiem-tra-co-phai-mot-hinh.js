/**                        Kiểm tra có phải là một hình?
 * YÊU CẦU:
    +   Một hình gồm n cạnh và n góc. Nhập vào số n và một mảng gồm n phần tử chứa các góc (độ) của một hình (hình tam giác, hình vuông,…).

    - Ví dụ:
        - Hình tam giá có 3 cạnh, và các góc lần lượt là 80°, 70° và 30°.
        - Vậy ta có n = 3 và array=[80, 70, 30]
*/

/**
 *  Cho người dùng nhập vào n và một mảng gồm n phần tử là các góc. Viết một hàm kiểm tra xem từ số n và mảng đó có thỏa mãn là một hình vẽ hay không?
 * 
 * 
    -   Nếu thỏa mãn trả ra **true**
    -   Nếu không thỏa mãn trả ra **false**

    -   Lưu ý:
        -   Trả về **false** nếu **n < 3**.
        -   Tổng các góc trong là **(n - 2) x 180°**.
 */

//  ----------- CÁCH 1 -------------//
const isShape_01 = function (n, arr)  {
    if(n < 3) return false;

    let tongCacGocCho = 0;
    for(const angle of arr) {
        if(angle === 0 || angle > 180) return false; // không được có góc nào 0 độ   
        tongCacGocCho += angle;
    }
    

    // tính số góc cần có theo số lượng cạnh được cho
    let tongCacGoc = (n - 2) * 180;

    return (tongCacGoc === tongCacGocCho);
}

let vidu_01 = isShape_01(4, [90, 90, 90, 90]);
let vidu_02 = isShape_01(3, [20, 20, 140]);
let vidu_03 = isShape_01(1, [21]);
let vidu_04 = isShape_01(5, [500, 0, 20, 10, 10]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);

console.log("---------------------------------------------------------");
/**
 *  n = 4 và array = [90, 90, 90, 90] —> true

    n = 3 và array = [20, 20, 140] —> true

    n = 1 và array = [21] —> false
    // vì n phải lớn hơn 2

    n = 5 và array = [500, 0, 20, 10, 10] —> false
    // vì tổng các góc không thể lớn hơn 180° và cũng không có góc nào nhỏ hơn hoặc bằng 0°.
 */

//  -------------- CÁCH 2 ---------------------//
const isShape_02 = (n, arr) => {
    if(n < 3) return false;

    // sử dụng built-in some của array
    const angleIS = arr.some(((angle) => angle <= 0 || angle >= 180));
    /** angle không thõa điều kiện trên sẽ trả về false */
    if(angleIS) return false;

    // sử dụng built-in reduce của array để tính toán
    const tongCacGocDuocCho = arr.reduce( (sum, angle) => {
        sum += angle;
        return sum;
    }, 0);

    const tongCacGoc = (n - 2) * 180;

    return(tongCacGoc === tongCacGocDuocCho);
}


let vidu_05 = isShape_02(4, [90, 90, 90, 90]);
let vidu_06 = isShape_02(3, [20, 20, 140]);
let vidu_07 = isShape_02(1, [21]);
let vidu_08 = isShape_02(5, [500, 0, 20, 10, 10]);

console.log(vidu_05);
console.log(vidu_06);
console.log(vidu_07);
console.log(vidu_08);