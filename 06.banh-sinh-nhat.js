/**                        Bánh sinh nhật
 * YÊU CẦU:
    +   Viết một hàm **getBirthdayCake(name, age)** để tạo một chiếc bánh sinh nhật hình chữ nhật, dựa trên tên và tuổi của ai đó.

        -   Nếu tuổi là một số chẵn, hãy vẽ hình bao quanh bằng chữ "#".

        -   Nếu tuổi là một số lẻ, hãy vẽ hình bao quanh bằng chữ "*".
        
        -   Dòng tin nhắn phải ở định dạng: {tuổi} Chúc mừng sinh nhật {tên}! {tuổi}
        
        -   Để lại một khoảng trống giữa mép bánh và số tuổi.
*/

function kiTu (kiTu, DoDai) {
    let ans = kiTu.repeat(DoDai); // tạo một chuỗi kí tự lặp lại n lần
    return ans;
}

function loiChuc (name, age, kitu) {
    return `${kitu} ${age} Chúc mừng sinh nhật ${name}! ${age} ${kitu}`
}

const getBirthdayCake = (name, age) => {
    let char = age % 2 == 0 ? "#" : "*";

    let chucMung = loiChuc(name, age, char);
    let kiHieu   = kiTu(char, chucMung.length);

    return `
        ${kiHieu}
        ${chucMung}
        ${kiHieu}
    `;
}

let vidu_01 = getBirthdayCake("Giang",18);
let vidu_02 = getBirthdayCake("Thiệu",17);

console.log(vidu_01);
console.log(vidu_02);


/**     VÍ DỤ
    const test1 = getBirthdayCake("Nam", 18);
    console.log(test1);

    ##################################
    # 18 Chúc mừng sinh nhật Nam! 18 #
    ##################################
*/


/**     VÍ DỤ
 *  const test2 = getBirthdayCake("Long", 17);
    console.log(test2);

    ***********************************
    * 17 Chúc mừng sinh nhật Long! 17 *
    ***********************************
 */


