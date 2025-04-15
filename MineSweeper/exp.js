// let map = new Array(9).fill(null).map(() => new Array(9).fill(""));
// const mines = [
//   [1, 7],
//   [3, 2],
//   [4, 7],
//   [6, 0],
//   [6, 1],
//   [6, 2],
//   [6, 3],
//   [7, 4],
//   [7, 5],
//   [8, 3],
//   [8, 5],
// ];

// for (let i = 0; i < 9; i++) {
//   for (let j = 0; j < 9; j++) {

//     for (let k = 0; k < mines.length; k++) {
//       let [a, b] = mines[k];
//       if ((a == i) && (b == j)) {
//         map[i][j] = "Y";
//       } 
//     }
//   }
// }



// for (let i = 0; i < 9; i++) {
//     let row = "";
//     //  console.log("row: ", i);
//       for (let j = 0; j < 9; j++) {
//       //  
//         row += map[i][j] + " " ;
//       }

//       console.log(row);
//       row = "";
//     }

for(let i = 0 ; i < 10; i++) {
    console.log(Math.floor(Math.random() * 9));
    console.log(Math.floor(Math.random() * 9));
}
