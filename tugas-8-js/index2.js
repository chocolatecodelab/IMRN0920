const readBookPromise = require('./promise');

function read() {
    readBookPromise(10000, books)
    .then(function (fulfilled){
    readBookPromise(fulfilled, books)
    .then(function(fulfilled) {
        readBookPromise(fulfilled, books)
    });
    
    })
    .catch(function(rejected) {
        console.log(`karena waktu saya tinggal ${rejected}`);
    })
}



var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
];

read();
