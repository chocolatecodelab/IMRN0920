// if-else

var nama = prompt('Nama harus diisi!: ');
var benar = true;
while (benar) {
var peran = prompt(`Halo, ${nama}, Pilih peranmu untuk memulai game! (pilih 1-3, Penyihir: 1, Guard: 2, Werewolf: 3) `);


    if (peran == '1') {
        alert(`Selamat Datang di Dunia Werewolf, ${nama}`)
        alert(`Halo, Penyihir ${nama}, kamu dapat melihat siapa yang menjadi Werewolf!`)
        benar = false;
    } else if (peran == '2') {
        alert(`Selamat Datang di Dunia Werewolf, ${nama}`)
        alert(`Halo, Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
        benar = false;
    } else if (peran == '3') {
        alert(`Selamat Datang di Dunia Werewolf, ${nama}`)
        alert(`Halo, Werewolf ${nama}, kamu akan memakan mangsa setiap malam!`)
        benar = false;
    } else {
        alert('Anda memasukkan nomor yang salah / memasukkan huruf');
        benar = false;
        benar = confirm('Apakah anda ingin mengulang?');
    }

}
        alert('Terima kasih telah bermain');



    // Switch Case

    var tanggal = Number(prompt('Silahkan Masukkan tanggal : '));
    

    if (! tanggal < 1 || tanggal > 31) {
        bulan = Number(prompt('Silahkan Masukkan Bulan ke-(pilih 1-12): '))
        switch(bulan) {
            case 1  : {bulan = "Januari"; break;}
            case 2  : {bulan = "Februari"; break;}
            case 3  : {bulan = "Maret"; break;}
            case 4  : {bulan = "April"; break;}
            case 5  : {bulan = "Mei"; break;}
            case 6  : {bulan = "Juni"; break;}
            case 7  : {bulan = "Juli"; break;}
            case 8  : {bulan = "Agustus"; break;}
            case 9  : {bulan = "September"; break;}
            case 10 : {bulan = "Oktober"; break;}
            case 11 : {bulan = "Nopember"; break;}
            case 12 : {bulan = "Desember"; break;}
            default : {bulan = false; break;}
        }

        if(!bulan == false) {
          tahun = Number(prompt('Silahkan Masukkan Tahun (1900-2200):'));

            if (tahun >= 1900 && tahun <= 2200 ) {
            alert(`${tanggal} ${bulan} ${tahun} `);
            } else {
            alert('Yang anda masukkan salah!');
            }

        } else{
            alert('Yang anda masukkan salah!');
        }
  
    } else {
        alert('Yang anda masukkan salah!');
    }
 
    


