// //function Expression
// const tampil = function (nama) {
//     return 'Halo, ${nama}';
// }
// console.log(tampil('alif'));

// //arrow function
// const tampil = nama => { 
// return `Halo, ${nama}`;
//  }
// console.log('alif');

// const tampil = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampil('alif', 'malam'));

//implisit return
// const tampil = nama => `Halo, ${nama}`;
// console.log('alif');

// const tampilnama = () => 'Hello world';
// console.log(tampilnama());


let mahasiswa = ['Alifudin', 'niko', 'priambodo'];

//biasa
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf);

//arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlah: nama.length }));
// console.log(jumlahHuruf);
console.table(jumlahHuruf);