const readBooks = require('./callback');

function timeout(sisaWaktu) {
    if(sisaWaktu > books[2].timeSpent){
        readBooks(sisaWaktu, books, timeout);
    }else {
        console.log("Alhamdulillah sudah membaca");
    }
}

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
]


readBooks(10000, books, timeout);




