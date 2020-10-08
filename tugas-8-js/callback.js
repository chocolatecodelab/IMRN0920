function readBooks(time, book, callback) {
    if(time === 10000){
        book = book[0];
    }else if(time === (10000 - book[0].timeSpent)){
        book = book[1];
    } else if(time == (10000 - book[0].timeSpent - book[1].timeSpent)){
        book = book[2];
    }else {
        book = book[0];
    }

    console.log(`saya membaca ${book.name}`);
    setTimeout(function () {
        let sisaWaktu = 0;
        if (time > book.timeSpent) {
            sisaWaktu = time - book.timeSpent;
            console.log(`saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`);
            callback(sisaWaktu);
        }else {
            console.log("waktu saya habis");
            callback(false);
        }
    }, book.timeSpent) 
}

module.exports = readBooks;