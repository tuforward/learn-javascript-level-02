/**              Blah, Blah, Blah…
 * YÊU CẦU:
    +   Tạo một hàm thay thế **n** từ cuối cùng bằng "blah". Thêm "..." vào "blah" cuối cùng.

    -   Nếu **n** dài hơn số từ trong câu, hãy thay tất cả các từ bằng "blah"

    -   Tất cả các từ "blah" sẽ là chữ thường!
*/

/**                 VÍ DỤ
 *  blahBlah("Anh học CNTT hả, cài win dùm em nhé!", 3)
    —> "Anh học CNTT hả, cài win blah blah blah…"

    blahBlah("Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không.", 5)
    —> "Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình blah blah blah blah blah…"
 */

// -------------------- CÁCH 1 ------------------------------------- //
const replaceAll_word_withBlah = (arr) => {
    let ans = [];
    ans = arr.map(item => "blah");
    return ans;
} 

const replace_word_withBlah = (arr, n) => {
    ans = arr.map((item, index) => {
        if(index < arr.length - n) return item;

        return "blah";
    });

    return ans;
} 

function blahBlah_01(str, n) {
    if(n === 0) return str;
    let word_array = str.split(" "); // tách từ

    let ans_array = [];

    if(n > word_array.length) 
        ans_array = replaceAll_word_withBlah(word_array);

    else ans_array = replace_word_withBlah(word_array, n);
    
    str = ans_array.join(" ");
    str += "...";
    return str;
}

let vidu_01 = blahBlah_01("Anh học CNTT hả, cài win dùm em nhé!" , 3);
let vidu_02 = blahBlah_01("Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không.", 5);

console.log(vidu_01);
console.log(vidu_02);

// -------------------- CÁCH 2 ------------------------------------- //

const blahBlah_02 = function (str, n) {
    let wordArray = str.split(" "); // tách từng từ ra

    let combine_word_with_blah  = wordArray.map( (word, index, arrayOriginal) => {
        return n > arrayOriginal.length - 1 - index ? "blah" : word;
    });

    str = combine_word_with_blah.join(" "); // kết hợp các từ riêng lẻ lại
    str += "...."; // nối thêm 3 chấm vào cuối câu
    
    return str; 
}

let vidu_03 = blahBlah_02("Anh học CNTT hả, cài win dùm em nhé!" , 3);
let vidu_04 = blahBlah_02("Cảm giác bất an khi tự dưng một đứa bạn cũ hỏi mình đang học IT phải không.", 5);

console.log(vidu_03);
console.log(vidu_04);