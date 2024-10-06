/**                  Bộ chuyển đổi trọng lượng hành tinh
 * YÊU CẦU:
    +   Trong thử thách này, bạn cần chuyển đổi một trọng lượng đo trên một hành tinh của Hệ Mặt Trời sang trọng lượng tương ứng trên một hành tinh khác.


    +   Trọng lượng trên hành tinh B = Trọng lượng trên hành tinh A / lực hấp dẫn của hành tinh A * lực hấp dẫn của hành tinh B
*/

const lucHapDanCua = {
    "Mercury" :  3.7,
    "Venus"   :  8.87,
    "Earth"   :  9.81,
    "Mars"    :  3.711,
    "Jupiter" :  24.79,
    "Saturn"  :  10.44,
    "Uranus"  :  8.69,
    "Neptune" : 11.15  
}

const spaceWeights = function (HanhTinhA, weightOfA, HanhTinhB) {
    let calc = (weightOfA / lucHapDanCua[HanhTinhA]) * lucHapDanCua[HanhTinhB];
    return calc;
}

let vidu_01 = spaceWeights("Earth", 1, "Mars");
let vidu_02 = spaceWeights("Earth", 1, "Jupiter");
let vidu_03 = spaceWeights("Earth", 1, "Neptune");

console.log(vidu_01);
console.log(vidu_02);
console.log(vidu_03);



/**
    Planet (Hành tinh)          m/s²
    
    Mercury (Sao Thủy)          3.7
    
    Venus (Sao Kim)             8.87
    
    Earth (Trái Đất)            9.81
    
    Mars (Sao Hỏa)              3.711
    
    Jupiter (Sao Mộc)           24.79
    
    Saturn (Sao Thổ)            10.44
    
    Uranus (Sao Thiên Vương)    8.69
    
    Neptune (Sao Hải Vương)     11.15
 */
/**
    spaceWeights("Earth", 1, "Mars") ➞ 0.37828746177370026

    spaceWeights("Earth", 1, "Jupiter") ➞ 2.527013251783894

    spaceWeights("Earth", 1, "Neptune") ➞ 1.1365953109072375
 */