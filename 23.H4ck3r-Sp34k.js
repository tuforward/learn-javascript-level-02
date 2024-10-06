/**                H4ck3r Sp34k (Chuyển đổi thành ngôn ngữ Hacker)
 * YÊU CẦU:
    +   Tạo một hàm nhận một chuỗi là đối số và trả về phiên bản được mã hóa (h4ck3r 5p34k) của chuỗi đó.

    -   Lưu ý:
        -   Hàm này phải thay thế tất cả các ký tự:
                - **a** thay bằng **4**
                - **e** thay bằng **3**
                - **i** thay bằng **1**
                - **o** thay bằng **0**
                - **s** thay bằng **5**
*/


//  ----------------------------- CÁCH 1 ---------------------------------------- // 
const hackerLanguages = {
    "a": "4",
    "e": "3",
    "i": "1",
    "o": "0",
    "s": "5",
};

const hackerSpeak_01 = (str) => {
    let charArray = str.split("");
    
    charArray = charArray.map(char => {
        if(hackerLanguages[char]) return hackerLanguages[char];
        else return char;
    });

    str = charArray.join("");
    return str;
}


let vidu_01 = hackerSpeak_01("javascript is cool");
let vidu_02 = hackerSpeak_01("programming is fun");
let vidu_03 = hackerSpeak_01("become a coder");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

//  ----------------------------- CÁCH 2 ---------------------------------------- // 
console.log("----------------------------------------------------------------------");

const hackerSpeak_02 = function (str) {
    str = str.replace(/a/g, 4);
    str = str.replace(/e/g, 3);
    str = str.replace(/i/g, 1);
    str = str.replace(/o/g, 0);
    str = str.replace(/s/g, 5);

    return str;
}


let vidu_04 = hackerSpeak_02("javascript is cool");
let vidu_05 = hackerSpeak_02("programming is fun");
let vidu_06 = hackerSpeak_02("become a coder");

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);

/**
    hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

    hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

    hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
 */