/**                        Swap Cases (Đảo ngược viết hoa, viết thường)
 * YÊU CẦU:
 * 
    +  Viết hàm swappingCases(string) truyền vào một string bất kỳ, đảo ngược cách viết hoa, viết thường của các chữ cái.
*/

function isUpper (letter) {
    if(letter === letter.toUpperCase()) return true;
    return false;
}

const swapCases = function (str) {
    let letterArray = str.split(""); // tách thành từng chữ từ lun

    let swapLetterArray = letterArray.map(letter => {
        return isUpper(letter) ? letter.toLowerCase() : letter.toUpperCase();
    });

    str = swapLetterArray.join(""); // gôm lại
    return str;
}


let vidu_01 = swapCases("Le VAn HunG");
let vidu_02 = swapCases("NGuYễN vĂN ThiỆU");

console.log(vidu_01);
console.log(vidu_02);

/**
    "Le VAn HunG" —> "lE vaN hUNg"

    "Đặng PhưƠnG NAm" —> "đẶNG pHƯơNg naM"
 */