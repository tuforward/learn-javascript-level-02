/**                        Tìm từ ≤ n ký tự
 * YÊU CẦU:
    +   Viết hàm smallWords(string, number) truyền vào một string và một số number. Trả ra một string mới chỉ gồm những từ ≤ number.    
*/

const smallWords = function (str, n) {
    let wordArray = str.split(" "); // tách các từ

    let ansArray = wordArray.filter(word => word.length <= n);

    str = ansArray.join(" ");
    return str;
}

let vidu_01 = smallWords("I Love Foood Code Too Playing Much", 4);
let vidu_02= smallWords("I Love Foood Code Too Playing Much", 3);

console.log(vidu_01);
console.log(vidu_02);

/**
    smallWords("I Love Foood Code Too Playing Much", 4) —> "I Love Code Too Much".

    smallWords("I Love Foood Code Too Playing Much", 3) —> "I Too"
 */