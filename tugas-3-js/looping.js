console.log("No.1 Looping While");
console.log("LOOPING PERTAMA");
let x = 1;
while(x <= 20) {
  if(x % 2 == 0){
      console.log(`${x} - I love coding`);
  }
  x++;
};

console.log("LOOPING KEDUA");
let y = 20;
while(x > 0){
    if(x % 2 == 0) {
        console.log(`${x} - I will become a mobile developer`);
    }
    x--;
}
console.log("\n");
console.log("No 2 Looping For");

for(let i = 1; i <= 20; i++) {
   if(i % 2 != 0 && i % 3 == 0 ) {
    console.log(`${i} - I Love Coding`)   
   } else if (i % 2 == 0) {
        console.log(`${i} - Berkualitas`)
   } else if(i % 2 != 0) {
    console.log(`${i} - Santai`)
   }
    
}

console.log("\n");
console.log("No. 3 Looping For");

let z = '';
for(let a = 0; a < 4; a++){
    for( let b = 0; b < 8; b++){
        z += '#';
    }
    z += '\n';
}
console.log(z);

console.log("\n");
console.log("No. 4 Looping For");


let t = '';
for(let c = 0; c < 7; c++) {
    for( let d = 0; d <= c; d++) {
        t += '#';
    }
    t += '\n';
}

console.log(t);

console.log("\n");
console.log("no. 5 Looping For");


let ukuran = 8;
let zigzag = "";

for(let x = 0; x < ukuran; x++){
    for (let y = 0; y < ukuran; y++){
        if((y + x) % 2 == 0) {
            zigzag += " ";
        } else {
            zigzag += "#"
        }
    }
    zigzag += "\n";
}

console.log(zigzag);

       
     