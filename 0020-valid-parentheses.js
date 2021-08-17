let isValid = function () {
  let arr = Array.from("(){[()]}[]");
  let stack = [];
  console.log(arr);

  //先判斷不是右邊括號
  if (
    arr[0].charCodeAt() !== 41 ||
    arr[0].charCodeAt() !== 93 ||
    arr[0].charCodeAt() !== 125
  ) {
    for (let i = 0; i < arr.length; i++) {
      if (
        arr[i].charCodeAt() == 40 ||
        arr[i].charCodeAt() == 91 ||
        arr[i].charCodeAt() == 123
      ) {
        stack.push(arr[i]);
        // console.log("stack :", stack);
        // console.log("stack[-1] :", stack[stack.length - 1]);
      } else if (
        arr[i].charCodeAt() == 41 ||
        arr[i].charCodeAt() == 93 ||
        arr[i].charCodeAt() == 125
      ) {
        if (
          arr[i].charCodeAt() - 1 == arr[i - 1].charCodeAt() ||
          arr[i].charCodeAt() - 2 == arr[i - 1].charCodeAt() ||
          arr[i].charCodeAt() - 1 == stack[stack.length - 1].charCodeAt() ||
          arr[i].charCodeAt() - 2 == stack[stack.length - 1].charCodeAt()
        ) {
          //   console.log(stack);
          stack.pop(-1);
          //   console.log(stack);
          console.log("true");
        } else {
          console.log("false");
        }
      }
      //   return arr[i];
    }
    // console.log(stack);
  } else {
    console.log("false");
  }
};

isValid();

/* ASCII
( = 40
) = 41
[ = 91
] = 93
{ = 123
} = 125
*/
