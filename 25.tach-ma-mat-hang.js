/**                    Tách mã mặt hàng
 * YÊU CẦU:
    +   Viết một hàm nhận một mã hàng hóa và trả về một mảng chứa phần chữ cái và phần số tương ứng của mã đó. Mã hàng hóa có định dạng "[chữ cái][chữ số]".
*/

//  ------------------  CÁCH 1  ------------------------------- //
const splitCode = (str) => {
    let digit = str.match(/\d+/);
    
    let indexForSplit = digit.index;

    let strCode = str.slice(0, indexForSplit);
    let numCode = str.slice(indexForSplit);

    return [strCode, numCode];
}


let vidu_01 = splitCode("TEWA8392");
let vidu_02 = splitCode("MMU778");
let vidu_03 = splitCode("SRPE5532");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("---------------------------------------------------------------------");
//  ------------------  CÁCH 2  ------------------------------- //
function splitCode_01 (str) {
    let strCode = "";
    let numCode = "";
    let isDigit = false;

    for(let char of str) {
        let toNumber = parseInt(char);

        // nếu chưa xét đến kí tự số
        if(isNaN(toNumber)) strCode += char;
        
        else numCode += char;
    }

    return [strCode, numCode];
}


let vidu_04 = splitCode_01("TEWA8392");
let vidu_05 = splitCode_01("MMU778");
let vidu_06 = splitCode_01("SRPE5532");

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);

/**
    splitCode("TEWA8392") ➞ ["TEWA", 8392]

    splitCode("MMU778") ➞ ["MMU", 778]

    splitCode("SRPE5532") ➞ ["SRPE", 5532]
*/