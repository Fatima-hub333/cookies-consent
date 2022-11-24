// {Nested Logic}
function processData(input) {
  let inputArr = input.split(" ");
  let secondIndexElement = inputArr[2].split("\n");
  let d1 = Number(inputArr[0]);
  let m1 = Number(inputArr[1]);
  let y1 = Number(secondIndexElement[0]);
  let d2 = Number(secondIndexElement[1]);
  let m2 = Number(inputArr[3]);
  let y2 = Number(inputArr[4]);

  let fine = 0;
  if (d1 > d2 && m1 == m2 && y1 == y2) {
    fine = (d1 - d2) * 15;
  } else if (d1 < d2) {
    fine = 0;
  }
  if (m1 > m2 && y1 == y2) {
    fine = (m1 - m2) * 500;
  }
  if (y1 > y2) {
    fine = 10000;
  }
  console.log(fine);
}

// {Unit Testing} (TypeScript)
// class TestDataEmptyArray{
//   get_array() {
//     let emptyArr: number[] = [];
//     return emptyArr;
//   }
// }
// class TestDataUniqueValues {
//   get_array() {
//     let arr: number[] = [0, 1];
//     return arr;
//   }
//   get_expected_result() {
//     return 0;
//   }
// }

// class TestDataExactlyTwoDifferentMinimums {
//   get_array() {
//     let arr: Number[] = [0, 0, 1];
//     return arr;
//   }
//   get_expected_result() {
//     return 0;
//   }
// }



















