/**                  Cường độ nổ
 * YÊU CẦU:
    +   Cho một số nguyên, trả về một chuỗi từ "Boom", có các biến thể như sau:
    - Chuỗi phải bao gồm n ký tự "o", trừ khi n nhỏ hơn 2 (trong trường hợp đó, trả về "boom").

    -   Nếu n chia hết cho 2, thêm dấu chấm than (!) vào cuối.
    -   Nếu n chia hết cho 5, trả về chuỗi IN HOA.
    -   Nếu n chia hết cho cả 2 và 5, trả về chuỗi IN HOA và thêm dấu chấm than vào cuối.

    - Ghi chú:
        -   Chuỗi "Boom" sẽ luôn bắt đầu bằng ký tự "B" in hoa, trừ khi n nhỏ hơn 2, trong trường hợp đó trả về một vụ nổ nhỏ như "boom".
*/

const charDefault = "o";

const createString = function (doDaiO, isUpper, isChamThan) {
    let str = "B" + charDefault.repeat(doDaiO) + "m";

    if(isUpper) str = str.toUpperCase();
    if(isChamThan) str += "!";
    return str;
}

function boomIntensity(n) {
    if(n < 2) return "boom";

    if(n % 2 == 0 && n % 5 == 0) return createString(n, 1, 1);

    if(n % 2 == 0) return createString(n, 0, 1);

    if(n % 5 == 0) return createString(n, 1, 0);
}

let vidu_01 = boomIntensity(4);
let vidu_02 = boomIntensity(1);
let vidu_03 = boomIntensity(5);
let vidu_04 = boomIntensity(10);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
/**
    boomIntensity(4) ➞ "Boooom!"
    // Có 4 ký tự "o" và 4 chia hết cho 2 (bao gồm dấu chấm than)

    boomIntensity(1) ➞ "boom"
    // 1 nhỏ hơn 2, nên trả về "boom"

    boomIntensity(5) ➞ "BOOOOOM"
    // Có 5 ký tự "o" và 5 chia hết cho 5 (IN HOA)

    boomIntensity(10) ➞ "BOOOOOOOOOOM!"
    // Có 10 ký tự "o" và 10 chia hết cho 2 và 5 (IN HOA và bao gồm dấu chấm than)
 */