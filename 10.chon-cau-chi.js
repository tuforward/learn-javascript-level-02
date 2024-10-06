/**                        Chọn cầu chì
 * YÊU CẦU:
    +   Cầu chì bị đứt mạch điện khi dòng điện đi qua vượt quá định mức của cầu chì, để ngăn không cho nhiệt tích tụ quá nhiều (có thể gây cháy). Cầu chì lý tưởng để chọn cao hơn đầu ra hiện tại của thiết bị, nhưng cũng càng gần với nó càng tốt.

    Đưa ra một danh sách các loại cầu chì và đầu ra hiện tại của thiết bị, hãy trả về cầu chì nào là tốt nhất cho thiết bị.
*/

// CHỈ CÓ THỂ CHỌN CẦU CHÌ VỚI NGƯỠNG <= GIÁ TRỊ CẦU CHÌ ĐƯỢC CHO

//  --------------------------------    CÁCH 1  -----------------------------------//
function getFuse_01(listFuse, fuseNeeded) {
    // sắp xếp lại danh sách cầu chì tăng dần
    listFuse.sort((a, b) => a - b);

    let fuseChoose = -1;
    for(let fuse of listFuse) {
        if(fuseNeeded <= fuse) {
            fuseChoose = fuse;
            break;
        }
    }

    return fuseChoose;
}

let vidu_01 = getFuse_01([3, 5, 12], 4.5);
let vidu_02 = getFuse_01([5, 14, 2], 5.5);
let vidu_03 = getFuse_01([17, 15, 12], 9);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);

//  --------------------------------    CÁCH 2  -----------------------------------//
const getFuse_02 = (listFuse, fuseNeeded) => {
    // sắp xếp lại danh sách cầu chì tăng dần
    listFuse.sort((a, b) => a - b);

    // sử dụng hàm built-in của array là find
    let fuseChoose = listFuse.find(fuse => fuseNeeded <= fuse);

    // hàm find này sẽ tìm 1 phần tử giống với điều kiện (lưu ý chỉ 1 phần tử)
    
    return fuseChoose;
}

let vidu_04 = getFuse_02([3, 5, 12], 4.5);
let vidu_05 = getFuse_02([5, 14, 2], 5.5);
let vidu_06 = getFuse_02([17, 15, 12], 9);


console.log(vidu_04);
console.log(vidu_05);
console.log(vidu_06);
/**
    Danh sách cầu chì "3V", "5V", "12V" và thiết bị "4.5V" —> "5V"

    Danh sách cầu chì "5V", "14V", "2V" và thiết bị "5.5V" —> "14V"

    Danh sách cầu chì "17V", "15V", "12V" và thiết bị "9V" —> "12V"
 */