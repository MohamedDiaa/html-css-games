const shape = [
  [1, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 0, 0, 0],
];

let newShape = new Array(shape[0].length).fill(null).map(() => {
  return new Array(shape.length).fill(null);
});

for (let i = 0; i < shape.length; i++) {
  for (let j = 0; j < shape[i].length; j++) {
    newShape[j][i] = shape[i][j];
  }
}

console.log(newShape)