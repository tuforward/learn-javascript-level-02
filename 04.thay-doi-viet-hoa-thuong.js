/**                 AlTeRnAtInG cApS (Thay đổi viết hoa, viết thường)
 * YÊU CẦU:
    +   Tạo một hàm thay đổi kiểu viết (hoa hoặc thường) của các chữ cái trong một chuỗi.

    +   Viết xen kẽ 1 chữ hoa xong đến 1 chữ thường, lặp đi lặp lại cho đến hết chuỗi.

    - Lưu ý:
        - Ký tự đầu tiên phải luôn luôn là HOA.
        - Bỏ qua khoảng trắng.
*/

//  ---------------------- CÁCH 1 ----------------------------------- //
function chuyenDoiKiTu (str) {
    let letter_array = str.split(""); // tách kí tự đưa vào array

    let toggle = 0; // toggle = 0 => viết hoa và ngược lại

    let array_inv = letter_array.map(letter => {
        letter.toLowerCase(); // mặc định chỉnh về kí tự thường

        // khi gặp vị trí kí tự uppercase
        if(letter !== " ") {
            if(toggle == 0) {
                toggle = 1 - toggle;
                return letter.toUpperCase();
            }

            else {
                toggle = 1 - toggle;
                return letter;
            }
        }
    });

    str = "";
    array_inv.forEach(letter => {
        if(letter === undefined) str += " ";
        else str += letter
    });

    return str;
}

let vidu_01 = chuyenDoiKiTu("Khá Bảnh");
let vidu_02 = chuyenDoiKiTu("Khổ trước sướng sau thế mới giàu.");
let vidu_03 = chuyenDoiKiTu("Giàu trước khổ sau thế càng đau.");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

/**
 *  "Khá Bảnh" —> "KhÁ bẢnH"

    "Khổ trước sướng sau thế mới giàu." —> "KhỔ tRưỚc SưỚnG sAu ThẾ mỚi GiÀu."

    "Giàu trước khổ sau thế càng đau." —> "GiÀu TrƯớC kHổ SaU tHế CàNg ĐaU."
 */

//  ---------------------- CÁCH 2 ----------------------------------- //
const alternatingCaps = (string) => {
    let counter = 0;
    let array = string.split("");
  
    let newArray = array.map((character) => {
      if (character == " ") return character; // Nếu là khoảng trắng thì in ra luôn
      counter += 1;
      return counter % 2 ? character.toUpperCase() : character.toLowerCase(); // nếu vị trí chẵn in chữ hoa, nếu vị trí lẻ in chữ thường.
    });
  
    newArray = newArray.join("");
    return newArray;
};
  
const test1 = alternatingCaps("Khá Bảnh");
console.log(test1); // KhÁ bẢnH

const test2 = alternatingCaps("Khổ trước sướng sau thế mới giàu.");
console.log(test2); // KhỔ tRưỚc SưỚnG sAu ThẾ mỚi GiÀu.

const test3 = alternatingCaps("Giàu trước khổ sau thế càng đau.");
console.log(test3); // GiÀu TrƯớC kHổ SaU tHế CàNg ĐaU.