import React from "react";

import styled from "styled-components";

function App() {
  const ifLastItemIsEqualToSumOfTheRest = arr => {
    const temp = arr.sort((a, b) => a - b);
    const sum = temp.pop();
    let c = 0;
    temp.map(item => (c += item));
    return sum === c;
  };
  console.log(ifLastItemIsEqualToSumOfTheRest([3, 2, 4, 8, 5, 22]));

  const countString = str => {
    let c = 1;
    let temp = str.split("");
    let arr = [];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === temp[i + 1]) {
        c++;
      } else {
        let val = `${c}${temp[i]}`;
        arr = [...arr, val];
        c = 1;
      }
    }
    return arr.join("");
  };
  console.log(countString("fffccccddddddesss"));

  const wichOneHasMoreRepeat = str => {
    let temp = str.split(" ");
    temp = temp.map(item => {
      let mpTemp = item.split("");
      return mpTemp.reduce(
        (a, c) => {
          a[c] = a[c] ? a[c] + 1 : 1;
          if (a[c] > a.max) {
            a.max = a[c];
          }
          return a;
        },
        { max: 1, word: item }
      );
    });
    let amount = 1;
    let word = "";
    for (let item of temp) {
      if (item.max > amount) {
        amount = item.max;
        word = item.word;
      }
    }
    return word;
  };
  console.log(wichOneHasMoreRepeat("amir hossein kkkhademi is"));

  return <div></div>;
}
const Div = styled.div``;
export default App;
