console.log("No. 1");
function arrayToObject(array) {
const arr = array;
if(arr.length <= 0 ) {
    console.log("");
}

for(let i = 0; i < arr.length; i++){
    obj = {};
    obj.firstName = arr[i][0];
    obj.lastName = arr[i][1];
    obj.gender = arr[i][2];
    const now = new Date();
    const thisYear = now.getFullYear();
    if(arr[i][3] && thisYear - arr[i][3] >= 0 ) {
        age = thisYear - arr[i][3];  
    } else {
        age =  "Invalid Birth Year";
    }
    obj.age = age;
    const text = (`${i + 1}. ${obj.firstName} ${obj.lastName} :`);
    console.log(text);
    console.log(obj);
}


}

const people = [ 
    ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"]
 ];
 arrayToObject(people);

const people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ];
arrayToObject(people2);
arrayToObject([]);

console.log("----------------------");
console.log("No. 2");


function shoppingTime(memberId, money) {
    if((memberId === '') || (memberId === undefined && money === undefined)){
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }else if (money < 50000) {
        return "Mohon maaf, uang tidak cukup"
    }else {
        const obj = {};
        let moneyChange = money;
        const purchaseList = [];
        const sepatuStacattu = "Sepatu brand Stacattu";
        const bajuZoro = "Baju Zoro";
        const bajuHN = "Baju H&N";
        const sweaterUniklooh = "Sweater brand Uniklooh";
        const casingHandphone = "Casing Handphone";

        let checkout = 0;
        for (let i = 0; moneyChange >= 50000 && checkout == 0; i++){
            if(moneyChange >= 1500000){
                purchaseList.push(sepatuStacattu);
                moneyChange -= 1500000;
            }else if (moneyChange >= 500000){
                purchaseList.push(bajuZoro);
                moneyChange -= 500000;
            }else if (moneyChange >= 250000){
                purchaseList.push(bajuHN);
                moneyChange -= 250000;
            }else if (moneyChange >= 175000){
                purchaseList.push(sweaterUniklooh);
                moneyChange -= 175000;
            }else if (moneyChange >= 50000){
                for(let j = 0; j<= purchaseList.length -1; j++){ 
                    if(purchaseList[j] == casingHandphone) {
                        checkout += 1
                    }
                    
                }if(checkout == 0){
                    purchaseList.push(casingHandphone);
                    moneyChange -= 50000;
                }   
            } 
        }

        obj.memberId = memberId;
        obj.money = money;
        obj.listPurchased = purchaseList;
        obj.changeMoney = moneyChange;
        return obj;
    }
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());

console.log("-----------------");
console.log("No. 3")

function naikAngkot(listPenumpang) {
    const rute = ["A", "B", "C", "D", "E", "F"];
    const arrPenumpang = listPenumpang;
    const arrPenumpangAkhir = [];
    

    for(let i = 0; i < arrPenumpang.length; i++){
        let objPenumpang = {};
        let awal =  arrPenumpang[i][1];
        let akhir =  arrPenumpang[i][2];
        let indexAwal;
        let indexAkhir;
        for(let j = 0; j < rute.length; j++){
            if(rute[j] == awal){
                indexAwal = j;
            }else if(rute[j]== akhir){
                 indexAkhir = j;
            }
        }
        let bayaran = 0;
        bayaran = (indexAkhir - indexAwal) * 2000;

        objPenumpang.Penumpang = arrPenumpang[i][0];
        objPenumpang.naikDari = arrPenumpang[i][1];
        objPenumpang.tujuan = arrPenumpang[i][2];
        objPenumpang.bayar = bayaran;

        arrPenumpangAkhir.push(objPenumpang);
        
    }

    
        return arrPenumpangAkhir;

}

const dimitri = [
    ["Dimitri", "B", "F"], ["Icha", "A", "B"]
];
console.log(naikAngkot(dimitri));






















