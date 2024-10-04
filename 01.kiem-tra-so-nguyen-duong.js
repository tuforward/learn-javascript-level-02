/**                        KIỂM TRA SỐ NGUYÊN DƯƠNG
 * YÊU CẦU:
    +   - Theo lý thuyết thì số nguyên dương là tập hợp những số chia hết cho 1 và lớn hơn 0. Tức là dãy số 1, 2, 3 ,4 ,5 ,6 ... chính là các số nguyên dương.

    - Dùng hàm prompt để tạo ô nhập và lấy ra giá trị từ ô nhập đó.

    - Viết một hàm kiểm tra số nhập vào có phải số nguyên dương hay không?
        - Nếu đúng alert ra YES.
        - Nếu sai alert ra NO
*/

const isInterger = (giaTri)  => {
    if(giaTri > 0) return true;

    return false;
}

let giaTri = window.prompt("Nhập một số");

// nếu đó không phải số
if(isNaN(giaTri)) {
    window.alert("Vui lòng nhập một số");
}

else {
    let isValid = isInterger(giaTri);

    if(isValid) window.alert("YES");
    else window.alert("NO");
}