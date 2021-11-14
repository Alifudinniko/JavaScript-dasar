
//for..of

// //array (itterable)
// const mhs = ['Alifudninniko', 'Alif', 'niko'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);

// }

// mhs.forEach(m => console.log(m)); //Khusus array nda bisa string

// for (const m of mhs) {
//     console.log(m);
// }

// //string
// const nama = 'Alifudin';
// for (const n of nama) {
//     console.log(n);
// }

// const mhs = ['Alifudninniko', 'Alif', 'niko'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasisa ke ${i + 1}`);
// });

// for (const [i, n] of mhs.entries()) {
//     console.log(n, i + 1);
// }


//Node List (Iterable)

// const linama = document.querySelectorAll('.nama');

// linama.forEach(n => console.log(n.textContent));

// for (n of linama) {
//     console.log(n);
// }


//Arguments
// function jumlahAngka() {
//     // console.log(arguments);
//     // return arguments.reduce((a, i) => a + i);
//     // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// jumlahAngka(1, 2, 3, 4, 5);



// For In
const mhs = {
    nama: 'alif',
    umur: 33

}

for (m in mhs) {
    console.log(mhs[m]);
    console.log(m);
}



















