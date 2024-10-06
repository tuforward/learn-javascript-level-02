/**                        Tính tổng đơn hàng
 * YÊU CẦU:
    +   Tạo một hàm truyền vào một array gồm các phần tử là object (gồm các key: product, quantity, price) để tính toán tổng giá và trả về dưới dạng một số.

*/


const getTotalPrice =  (arr) => {
    
    // dùng map để tính toán * số lượng sản phẩm với giá của nó
    let arrayCost = arr.map(item => {
        return item.quantity * item.price;
    });

    // dùng hàm reduce để tính tổng giá
    let totalCost = arrayCost.reduce((sum, cur) => sum += cur);

    return totalCost;
}

let vidu_01 = getTotalPrice([ { product: "Sữa", quantity: 1, price: 7000 } ]);

let vidu_02 = getTotalPrice([
    { product: "Sữa", quantity: 1, price: 7000 },
    { product: "Ngũ cốc", quantity: 1, price: 50000 },
]);

let vidu_03 = getTotalPrice([ { product: "Sữa", quantity: 3, price: 7000 } ]);
     
let vidu_04 = getTotalPrice([
    { product: "Sữa", quantity: 1, price: 7000 },
    { product: "Trứng", quantity: 12, price: 3000 },
    { product: "Bánh mỳ", quantity: 2, price: 15000 },
    { product: "Phô mai", quantity: 1, price: 5000 },
]);

let vidu_05 = getTotalPrice([
    { product: "Sô cô la", quantity: 1, price: 12000 },
    { product: "Kẹo", quantity: 1, price: 2000 },
]);

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);
console.log(vidu_04);
console.log(vidu_05);

/**
    const test1 = getTotalPrice([
        { product: "Sữa", quantity: 1, price: 7000 }
    ]);

    console.log(test1); // 7000
 */

/**
    const test2 = getTotalPrice([
        { product: "Sữa", quantity: 1, price: 7000 },
        { product: "Ngũ cốc", quantity: 1, price: 50000 },
    ]);

    console.log(test2); // 57000
*/

/**
    const test3 = getTotalPrice([
        { product: "Sữa", quantity: 3, price: 7000 }
    ]);

    console.log(test3); // 21000
*/

/**
    const test4 = getTotalPrice([
        { product: "Sữa", quantity: 1, price: 7000 },
        { product: "Trứng", quantity: 12, price: 3000 },
        { product: "Bánh mỳ", quantity: 2, price: 15000 },
        { product: "Phô mai", quantity: 1, price: 5000 },
    ]);

    console.log(test4); // 78000
*/

/**
    const test5 = getTotalPrice([
        { product: "Sô cô la", quantity: 1, price: 12000 },
        { product: "Kẹo", quantity: 1, price: 2000 },
    ]);

    console.log(test5); // 14000
 */