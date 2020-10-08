function readBookPromise(time, book){
    if(time === 10000){
        book = book[0];
    }else if(time === (10000 - book[0].timeSpent)){
        book = book[1];
    } else if(time == (10000 - book[0].timeSpent - book[1].timeSpent)){
        book = book[2];
    }else {
        book = book[0];
    }

    console.log(`saya membaca ${book.name}`)
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            let sisaWaktu = time - book.timeSpent;
            if( sisaWaktu >= 0){
                console.log(`saya sudah selesai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`);
                resolve(sisaWaktu);
            }else {
                console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`);
                reject(sisaWaktu);
            }
        }, book.timeSpent);
    })
}

module.exports = readBookPromise;