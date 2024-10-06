/**                        Ignore Number Value (Bỏ qua các chữ số)
 * YÊU CẦU:
    +   Viết hàm ignoreNumbers(string) truyền vào một string bao gồm cả số và chữ, hãy trả về một string mới chỉ gồm chữ.
*/

//  -----------------------------   CÁCH 1  -------------------------------- //
//  Thực ra dùng hàm isNaN để check thì sẽ ok hơn nhé
function isDigit (char) {
    if(char >= '0' && char <= '9') return true;
    return false;
}

const ignoreNumberValue = (str) => {
    let letterArray = str.split("");

    let ans = letterArray.map(letter => isDigit(letter) ? "" : letter);

    ans = ans.join("");
    return ans;
}

let vidu_01 = ignoreNumberValue("Test4Ag54SF");
let vidu_02 = ignoreNumberValue("JHk34Gl3gG");

console.log(vidu_01);
console.log(vidu_02);

//  -----------------------------   CÁCH 2  -------------------------------- //
const ignoreNumbers = (string) => {
    const newString = string
      .split("")
      .map((item) => (isNaN(parseInt(item)) ? item : ""))
      .join("");
    return newString;
};
  
const test1 = "Test4Ag54SF";
console.log(ignoreNumbers(test1));
// Trả về: TestAgSF

const test2 = "JHk34Gl3gG";
console.log(ignoreNumbers(test2));
// Trả về: JHkGlgG

/**
    "Test4Ag54SF" —> "TestAgSF"

    "JHk34Gl3gG" —> "JHkGlgG"
*/