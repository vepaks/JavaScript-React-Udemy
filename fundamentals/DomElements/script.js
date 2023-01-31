// console.log(document.body.childNodes);

// console.log(document.querySelector('[data-current="3"]'));

// for (var node of document.body.childNodes) {
//   if (node.nodeName === "#text") {
//     continue;
//   }
//   console.log(node);
// }


function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}


pow(2, 2);
pow(2, 3);
pow(2, 4);
pow(2, 5);
pow(2, 6);
