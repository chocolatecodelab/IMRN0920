// Soal No.1 (Membuat kalimat) 

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(`${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`);

// end

// Soal No. 2 Mengurai Kalimat(Akses karakter dalam string)

var sentence = "I am going to be React Native Developer";

var arSentence = sentence.split(" ");

console.log(`First Word: ${arSentence[0]}`);
console.log(`Second Word: ${arSentence[1]}`);
console.log(`Third Word: ${arSentence[2]}`);
console.log(`Fourth Word: ${arSentence[3]}`);
console.log(`Fifth Word: ${arSentence[4]}`);
console.log(`Sixth Word: ${arSentence[5]}`);
console.log(`Seventh Word: ${arSentence[6]}`);
console.log(`Eight Word: ${arSentence[7]}`);

// end

// Soal No. 3 Mengurai Kalimat (Subtring)

var sentence2 = 'wow JavaScript is so cool';

var firstWord2 = sentence2.substring(0, 3);
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21,25);

console.log(firstWord2);
console.log(secondWord2);
console.log(thirdWord2);
console.log(fourthWord2);
console.log(fifthWord2);

// Soal No.4 Mengurangi Kalimat dan Menentukan Panjang String

var sentence3 = 'wow JavaScript is so cool';
var arSentence3 = sentence3.split(" ");

arWord = ['First Word', 'Second Word', 'Third Word', 'Fourth Word', 'Fifth Word'];

console.log(`${arWord[0]}: ${arSentence3[0]}, with length: 3`);
console.log(`${arWord[1]}: ${arSentence3[1]}, with length: 10`);
console.log(`${arWord[2]}: ${arSentence3[2]}, with length: 2`);
console.log(`${arWord[3]}: ${arSentence3[3]}, with length: 2`);
console.log(`${arWord[4]}: ${arSentence3[4]}, with length: 4`);

