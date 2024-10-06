/**                        Viết hoa chữ cái đầu tiên của mỗi từ
 * YÊU CẦU:
    +   Tạo một hàm và truyền vào một chuỗi. Sau đó chuyển đổi ký tự đầu tiên của mỗi từ trong chuỗi đó thành chữ hoa. Trả về chuỗi vừa được định dạng.
*/

/**
    makeTitle("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.")
    —> "Fix Bug Là Chuyện Dễ. Tìm Đoạn Code Gây Ra Bug Để Fix Mới Là Chuyện Khó."


    makeTitle("Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào.")
    —> "Khi Tui Biên Dịch Và Code Chạy Suôn Sẻ Trong Lần Đầu. Tui Tự Hỏi Đã Làm Sai Chỗ Nào."
 */

function makeTitle_01(str) {
    let wordArray = str.split(" "); // tách thành từng từ

    let wordArrayEdit = wordArray.map(function (word) {
        const chuCaiDauTien = word[0].toUpperCase();

        const CacChuCaiConLai = word.slice(1).toLowerCase();

        return (chuCaiDauTien + CacChuCaiConLai);
    });

    str = wordArrayEdit.join(" ");
    return str;
}

let vidu_01 = makeTitle_01("Fix bug là chuyện dễ. Tìm đoạn code gây ra bug để fix mới là chuyện khó.");

let vidu_02 = makeTitle_01("Khi tui biên dịch và code chạy suôn sẻ trong lần đầu. Tui tự hỏi đã làm sai chỗ nào.");

console.log(vidu_01);
console.log(vidu_02);
