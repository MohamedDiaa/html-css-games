
const DISK_COUNT = 5;

let disks = new Array(3).fill(null).map(() => { return new Array(DISK_COUNT).fill("x"); });

for(let i = 0; i < disks.length; i++) {
    for(let j = 0; j < disks[i].length; j++) {
        console.log("i", i,"j",j, disks[i][j]);
    }
}


// for (let i = 0; i < DISK_COUNT; i++) {
//   const d = new Disk(MAX_WIDTH - 10 * i);
//   disks[0][i] = d;
// }
