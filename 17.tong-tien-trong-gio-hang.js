/**                        Tính tổng tiền trong giỏ hàng
 * YÊU CẦU:
    +   Cho một mảng giỏ hàng chứa các sản phẩm (bao gồm tên, giá, số lượng). Hãy tính tổng tiền của giỏ hàng đó.
*/

const totalPriceInCart = (arr) => {
    let getTotalPriceEachItem = arr.map(item => item.price * item.quantity);

    let totalPriceAll = getTotalPriceEachItem.reduce((sum, item) => sum += item, 0);

    return totalPriceAll;
}
const cart = [
    { name: "iPhone", price: 1000, quantity: 5 },
    { name: "iPad", price: 500, quantity: 2 },
    { name: "MacBook", price: 2000, quantity: 1 },
];

let vidu_01 = totalPriceInCart(cart);

console.log(vidu_01);
/**
const cart = [
    { name: "iPhone", price: 1000, quantity: 5 },
    { name: "iPad", price: 500, quantity: 2 },
    { name: "MacBook", price: 2000, quantity: 1 },
];

// Tính toán để trả về: 1000 * 5 + 500 * 2 + 2000 * 1 = 8000
*/