/**                        Viết tắt câu
 * YÊU CẦU:
    +   Tạo một hàm nhận vào một câu văn và trả về chữ viết tắt của câu văn đó. 
    
    +   Lấy tất cả các từ có độ dài lớn hơn hoặc bằng n ký tự và trả về chữ cái đầu tiên của mỗi từ, được viết hoa.
*/

//  --------------------- CÁCH 1 -------------------------------//
function abbreviate_01 (str, n = 0) {
    let word = str.split(" "); // tách từ

    let ketQua = "";
    // dùng hàm built-in forEach duyệt các phần tử
    word.forEach(tuVung => {
        if(tuVung.length >= n)
            ketQua += tuVung[0];
    });

    return (ketQua.toUpperCase());
}


let vidu_01 = abbreviate_01("Xin chào! Tôi tên là Nam.");
let vidu_02 = abbreviate_01("Xin chào! Tôi tên là Nam.", 3);
let vidu_03 = abbreviate_01("Xin chào! Tôi tên là Nam.", 4);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

console.log("---------------------------------------------------------");

//  --------------------- CÁCH 2 -------------------------------//
const abbreviate_02 = (str, n = 0) => {
    let word_array = str.split(" "); // tách các từ

    // dùng hàm built-in filter tìm các từ có độ dài > n
    // let word_is_valid_length = word_array.filter(word => {
    //     if(word.length >= n) return word;
    // });

    // viết tắt 
    let word_is_valid_length = word_array.filter(word => word.length >= n);


    // dùng hàm built-in array để tạo một mảng mới
    let word_new = word_is_valid_length.map(word => word[0]);

    let str_ans = word_new.join("").toUpperCase();

    return str_ans;
}


let vidu_04 = abbreviate_02("Xin chào! Tôi tên là Nam.");
let vidu_05 = abbreviate_02("Xin chào! Tôi tên là Nam.", 3);
let vidu_06 = abbreviate_02("Xin chào! Tôi tên là Nam.", 4);

console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);

/**
 *  abbreviate("Xin chào! Tôi tên là Nam.") —> "XCTTLN"

    abbreviate("Xin chào! Tôi tên là Nam.", 3) —> "XCTTN"
    // Chữ "là" bị bỏ qua, vì có 2 ký tự, nhỏ hơn n = 3

    abbreviate("Xin chào! Tôi tên là Nam.", 4) —> "CN"
    // Các chữ có 3 ký tự trở xuống bị bỏ, vì n = 4
 */