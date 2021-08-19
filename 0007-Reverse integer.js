// 方法一
// 使用數字轉字串
// 遇 "-" 則從num[1] 開始
// 第一個數字跟最後一個數字交換
// 判斷數字是否在  2 ** 31 - 1 及 (-2) ** 31 之間
let reverse = function (x) {
  let num = x.toString().split("");
  let i = 0;
  let j = num.length - 1;
  let k = "";
  if (num[0] === "-") {
    i = 1;
  }
  while (i < j) {
    k = num[i];
    num[i] = num[j];
    num[j] = k;
    i++;
    j--;
  }
  let answer = num.join("");
  if (answer > 2 ** 31 - 1 || answer < (-2) ** 31) {
    console.log(0);
    return 0;
  } else {
    console.log(answer);
    return answer;
  }
};

reverse(-996);

//方法二
