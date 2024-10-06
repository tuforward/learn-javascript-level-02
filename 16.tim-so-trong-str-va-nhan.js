/**                        Tìm số trong String và Nhân
 * YÊU CẦU:
    +   Viết hàm multiplyNumberInString(string), truyền vào một string, hãy trả ra một string mới là phép nhân của các số có trong string đó.
*/

function mulDigit (str) {
    let letterArray = str.split(""); // tách ra từng chữ cái

    let digitArray = letterArray.filter(letter => !isNaN(parseInt(letter)));
    
    let ansArray = digitArray.map(digit => parseInt(digit) * parseInt(digit));

    ansArray = ansArray.join("");

    return ansArray.length ? ansArray : "0";
}

let vidu_01 = mulDigit("JG23BGH5BA");
let vidu_02 = mulDigit("VD23GS8S6AH");
let vidu_03 = mulDigit("AGD353GDSK8");
let vidu_04 = mulDigit("JBKJJKLDJ");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);

/**
- Ví dụ:
    - "JG23BGH5BA" —> "4925"
        - 2*2 = 4
        - 3*3 = 9
        - 5*5 = 25
        - —> "4925"
    - "VD23GS8S6AH" —> "496436"
        - 2*2 = 4
        - 3*3 = 9
        - 8*8 = 64
        - 6*6 = 36
        - —> "496436"
    - "AGD353GDSK8" —> "925964"
        - 3*3 = 9
        - 5*5 = 25
        - 3*3 = 9
        - 8*8 = 64
        - —> "925964"
    - "JBKJJKLDJ" —> "0"
        - Do không có số nào.
 */