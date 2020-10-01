// No.1 Looping While
let x = 1;
while(x <= 20) {
  if(x % 2 == 0){
      console.log(`${x} - I love coding`);
  }
  x++;
};

console.log("---pembatas---");

let y = 20;
while(x > 0){
    if(x % 2 == 0) {
        console.log(`${x} - I will become a mobile developer`);
    }
    x--;
}

// No. 2 Looping for

console.log("---pembatas---");

for(let i = 1; i <= 20; i++) {
   if(i % 2 != 0 && i % 3 == 0 ) {
    console.log(`${i} - I Love Coding`)   
   } else if (i % 2 == 0) {
        console.log(`${i} - Berkualitas`)
   } else if(i % 2 != 0) {
    console.log(`${i} - Santai`)
   }
    
}

console.log("---pembatas---");

let z = '';
for(let a = 0; a < 4; a++){
    for( let b = 0; b < 8; b++){
        z += '#';
    }
    z += '\n';
}
console.log(z);

console.log("---pembatas---");

let t = '';
for(let c = 0; c < 7; c++) {
    for( let d = 0; d <= c; d++) {
        t += '#';
    }
    t += '\n';
}

console.log(t);

console.log("---pembatas---");

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

       
     