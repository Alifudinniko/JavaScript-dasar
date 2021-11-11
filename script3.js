const angka = [-1, 8, 9, 1, 4, 5, -5, -4, 2, 3, 9];

//mencari angka >=3


// //for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);

//     }
// }
// console.log(newAngka);

//filter
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });
// console.log(newAngka);

//filter arrow
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

//map
// Kalkan semua angka dengan 2 
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);


//reduce
//jumlahkan seluruh elemen pada array
const newAngka = angka.reduce((accumulator, currentvalue) => accumulator + currentvalue, 5);
console.log(newAngka);

//mthod chaining
//cari angka ? 5
//kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) //8,9,9
    .map(a => a * 2) //16,18,18
    .reduce((acc, cur) => acc + cur); //
console.log(hasil);