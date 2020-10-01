console.log("No.1");

function teriak() {
    console.log("Halo Sanbers!");
}

teriak();

// -------end-------

console.log('\n');
console.log("No.2");

function kalikan(num1, num2) {
    return num1 * num2;
}

const hasilkali = kalikan(12, 4);
console.log(hasilkali);

// --------end--------

console.log('\n');
console.log("No.3");

function introduce(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

const perkenalan = introduce("Agus", 30, "Jln. Malioboro, Yogyakarta", "Gaming!");

console.log(perkenalan);

