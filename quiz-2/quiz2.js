// Berikut soal quiz kali ini, terdiri dari 3 Soal
//  * Kerjakan dengan sebaik mungkin, dengan menggunakan metode yang telah dipelajari,
//  * Tidak diperkenankan untuk menjawab hanya dengan console.log('teks jawaban');
//  * maupun dengan terlebih dahulu memasukkannya ke dalam variabel, misal var a = 'teks jawaban'; console.log(a);
//  * 
//  * Terdapat tambahan poin pada setiap soal yang dikerjakan menggunakan sintaks ES6 (+5 poin)
//  * Jika total nilai Anda melebihi 100 (nilai pilihan ganda + coding), tetap akan memiliki nilai akhir yaitu 100
//  * 
//  * Selamat mengerjakan
// */

/*========================================== 
  1. SOAL CLASS SCORE (10 poin + 5 Poin ES6)
  ==========================================
  Buatlah sebuah class dengan nama Score. class Score tersebut memiliki properti "subject", "points", dan "email". 
  "points" dapat di input berupa number (1 nilai) atau array of number (banyak nilai).
  tambahkan method average untuk menghitung rata-rata dari parameter points ketika yang di input berupa array (lebih dari 1 nilai)
*/

class Score {
    constructor(subject, points, email){
        this.subject = subject;
        this.points = points;
        this.email = email;
    }

    rata2(){
        if(this.points.length > 1){
           nilaiRata2 = this.points.average();
            console.log(nilaiRata2);
        } else {
             this.points.join();
        }
    }
}

score2 = new Score("makanan", 1, "nazar");
score = new Score("makanan", [2], "alialfatih");
console.log(score.rata2());



/*=========================================== 
  2. SOAL Create Score (10 Poin + 5 Poin ES6)
  ===========================================
  Membuat function viewScores yang menerima parameter data berupa array multidimensi dan subject berupa string
  Function viewScores mengolah data email dan nilai skor pada parameter array 
  lalu mengembalikan data array yang berisi object yang dibuat dari class Score.
  Contoh: 

  Input
   
  data : 
  [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88]
  ]
  subject: "quiz-1"

  Output 
  [
    {email: "abduh@mail.com", subject: "quiz-1", points: 78},
    {email: "khairun@mail.com", subject: "quiz-1", points: 95},
  ]
*/

// const data = [
//   ["email", "quiz - 1", "quiz - 2", "quiz - 3"],
//   ["abduh@mail.com", 78, 89, 90],
//   ["khairun@mail.com", 95, 85, 88],
//   ["bondra@mail.com", 70, 75, 78],
//   ["regi@mail.com", 91, 89, 93]
// ]

// function viewScores(data, subject) {
//   // code kamu di sini
// }

// // TEST CASE
// viewScores(data, "quiz-1")
// viewScores(data, "quiz-2")
// viewScores(data, "quiz-3")

/*==========================================
  3. SOAL Recap Score (15 Poin + 5 Poin ES6)
  ==========================================
    Buatlah fungsi recapScore yang menampilkan perolehan nilai semua student. 
    Data yang ditampilkan adalah email user, nilai rata-rata, dan predikat kelulusan. 
    predikat kelulusan ditentukan dari aturan berikut:
    nilai > 70 "participant"
    nilai > 80 "graduate"
    nilai > 90 "honour"

    output:
    1. Email: abduh@mail.com
    Rata-rata: 85.7
    Predikat: graduate

    2. Email: khairun@mail.com
    Rata-rata: 89.3
    Predikat: graduate

    3. Email: bondra@mail.com
    Rata-rata: 74.3
    Predikat: participant

    4. Email: regi@mail.com
    Rata-rata: 91
    Predikat: honour

*/

function recapScores(data) {
    const arr = data;
    console.log(arr.length);
    for(let i = 0; i < arr.length; i++ ){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][1] > 70 ){
                arr[i].push("participant")
            }else if(arr[i][1] > 80 ){
                arr[i].push("graduate");
            }else if(arr[i][1] > 90){
                arr[i].push("honour")
            }
            
        }
        console.log(`${i + 1}. ${arr[i][0]}`);
        console.log(`Rata-rata: ${arr[i][1]}`);
        console.log(`Predikat: ${arr[i][2]}`);
    }
    
    
  // code kamu di sini
}
const data = [
    ["abduh@mail.com", 85.7], 
    ["khairun@mail.com", 89.3], 
    ["bondra@mail.com", 74.3], 
    ["regi@mail.com", 91]
];
recapScores(data);
