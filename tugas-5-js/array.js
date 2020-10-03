console.log("No. 1 (Range)"); 

function range(startNum, finishNum) {
    let array = [];
    if(startNum === undefined && finishNum === undefined) {
        return -1;
    }
    if(startNum < finishNum) {
        for(i = startNum; i <= finishNum; i++) {
        array.push(i);
        }
    }else if(startNum > finishNum) {
        for(i = startNum; i >= finishNum; i--) {
            array.push(i);
        }
    } else {
        return -1;
    }   

    return array;

}

console.log(range(1, 10));
console.log(range(1));
console.log(range(11, 18));
console.log(range(54, 50));
console.log(range());

console.log("-------------------");
console.log("No.2 (Range with step");

function rangeWithStep(startNum, finishNum, step) {
    let array = [];
    if(startNum < finishNum) {
        for( let i = startNum; i <= finishNum; i += step ){
            array.push(i);
            }
        } else if (startNum > finishNum) {
            for(let i = startNum; i >= finishNum; i -= step) {
                array.push(i);
            }
        }

    return array;
}

console.log(rangeWithStep(1, 10, 2));
console.log(rangeWithStep(11, 23, 3));
console.log(rangeWithStep(5, 2, 1));
console.log(rangeWithStep(29, 2, 4));

console.log("--------------");
console.log("No. 3 (Sum of Range");

function sum(startNum, finishNum, step) {
    let array = [];
    let jumlah = 0;
    if(startNum === undefined && finishNum === undefined && step === undefined) {
        return 0;
    }else if ( finishNum === undefined && step === undefined) {
        return 1;
    }
    
    if (step === undefined ) {
        step = 1;
    }
    if(startNum < finishNum) {
        for( let i = startNum; i <= finishNum; i += step ){
             array.push(i);
            }
        } else if (startNum > finishNum) {
            for(let i = startNum; i >= finishNum; i -= step) {
                array.push(i);
            } 
        }
// maaf kak saya coba pakai ini  
    for(j= 0; j < array.length; j++) {
        jumlah += array[j];

        }
    return jumlah;    

}
console.log(sum(1, 10 ));
console.log(sum(5, 50, 2));
console.log(sum(15, 10 ));
console.log(sum(20, 10, 2));
console.log(sum(1));
console.log(sum());

console.log("---------");
console.log("No. 4");

// const input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
// ];

// console.log(`Nomor ID: ${input[0][0]}`);
// console.log(`Nama Lengkap: ${input[0][1]}`);
// console.log(`TTL: ${input[0][2]} ${input[0][3]}`);
// console.log(`Hobi: ${input[0][4]}`);
// console.log('\n');

// console.log(`Nomor ID: ${input[1][0]}`);
// console.log(`Nama Lengkap: ${input[1][1]}`);
// console.log(`TTL: ${input[1][2]} ${input[1][3]}`);
// console.log(`Hobi:  ${input[1][4]}`);
// console.log('\n');

// console.log(`Nomor ID: ${input[2][0]}`);
// console.log(`Nama Lengkap: ${input[2][1]}`);
// console.log(`TTL: ${input[2][2]} ${input[2][3]}`);
// console.log(`Hobi:  ${input[2][4]}`);
// console.log('\n');

// console.log(`Nomor ID: ${input[3][0]}`);
// console.log(`Nama Lengkap: ${input[3][1]}`);
// console.log(`TTL: ${input[3][2]} ${input[3][3]}`);
// console.log(`Hobi: ${input[3][4]}`);
// console.log('\n');

// console.log("-----------");

function datahandling(noId, namaLengkap, tempatLahir, tanggalLahir, hobi) {
    let array = [
        [noId, namaLengkap, tempatLahir, tanggalLahir, hobi]
    ];

    console.log(`Nomor ID: ${array[0][0]}`);
    console.log(`Nama Lengkap: ${array[0][1]}`);
    console.log(`TTL: ${array[0][2]} ${array[0][3]}`);
    console.log(`Hobi: ${array[0][4]}`);
    
}








datahandling("0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca");
console.log('\n');
datahandling("0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar");
console.log('\n');
datahandling("0003", "Winona", "Ambon", "25/12/1965", "Memasak");
console.log('\n');
datahandling("0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun");
console.log("-----------");

console.log("No. 5")
function balikKata(balik) {
let kataAwal = balik;
let kataAkhir = '';

for (let i = balik.length -1; i >= 0; i--) {
        kataAkhir += kataAwal[i];
    }
   return kataAkhir; 
} 

console.log(balikKata("Kasur Rusak"));
console.log(balikKata("SanberCode"));
console.log(balikKata("Haji Ijah"));
console.log(balikKata("racecar"));
console.log(balikKata("I am Sanbers"));

console.log("-------");
console.log("No. 6"); 

function datahandling2(nomorId, nama, tempatLahir, tanggalLahir, hobby) {
    let array = [nomorId, nama, tempatLahir, tanggalLahir, hobby];
    array.splice(1, 2);
    array.splice(1, 0, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    array.pop();
    array.push("Pria", "SMA Internasional Metro");

    // Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun
    let tglLahir = String(array.slice(3, 4));
    let pecahString = tglLahir.split("/");

    // Format tanggal pada data adalah dd-mm-YYYY
    let gabung = pecahString.join("-");

    // Gunakan switch case untuk menuliskan bulan di atas
    let pecahString2 = gabung.split("-");
    let bulan = Number(pecahString2[1]);
    switch(bulan) {
        case 01  : {bulan = "Januari"; break;}
        case 02  : {bulan = "Februari"; break;}
        case 03  : {bulan = "Maret"; break;}
        case 04  : {bulan = "April"; break;}
        case 05  : {bulan = "Mei"; break;}
        case 06  : {bulan = "Juni"; break;}
        case 07  : {bulan = "Juli"; break;}
        case 08  : {bulan = "Agustus"; break;}
        case 09  : {bulan = "September"; break;}
        case 10 : {bulan = "Oktober"; break;}
        case 11 : {bulan = "Nopember"; break;}
        case 12 : {bulan = "Desember"; break;}
        default : {bulan = false; break;}
    }
    console.log(array);
    console.log(bulan);
    // Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
    sorting = pecahString2.sort(function (a, b) {
        return b - a
    });
    console.log(sorting);

    // Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.
    console.log(gabung);

    // Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice
    overChar = String(array.slice(1, 2));
    pecahString3 = overChar.split(" ");
    gabung = `${pecahString3[0]} ${pecahString3[1]}`;
    console.log(gabung);
    
      
    
}

 datahandling2("0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca");
