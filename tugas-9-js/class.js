// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   mycar = new Model("Ford", "Mustang");
//   console.log(mycar.show());

console.log("No. 1");
console.log("Release 0");
class Animal {
    constructor(name, legs = 4, cold_blooded = false){
        this.name = name;
        this.legs = legs;
        this.cold_blooded = cold_blooded;
    }
   
}

const sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

console.log("Release 1");
console.log("-------");


class Frog extends Animal {
    constructor(name, legs){
        super(name, legs);
    }

    jump(){
        console.log("hop hop");
    }
}

class Ape extends Animal {
    constructor(name, legs){
        super(name);
        this.legs = legs;
    }

    yell() {
        console.log("Auooo");
    }
}

const sungokong = new Ape("kera sakti", 2);
sungokong.yell();

const kodok = new Frog("buduk");
kodok.jump();

console.log("-------");
console.log("No. 2");


class Clock {
    constructor({template}) {
    var timer;
        function render() {
        var date = new Date();
    
        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
    
        console.log(output);
        }
    
        this.stop = function() {
        clearInterval(timer);
        };
    
        this.start = function() {
        render();
        timer = setInterval(render, 1000);
        };
    }
}    



const clock = new Clock({template: 'h:m:s'});
clock.start(); 


