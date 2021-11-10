//Cara untuk membuat Object pada Javascript

//1. Object Literal 
// tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'Alif',
//     energy: 10,
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'Alif',
//     energy: 10,
//     makan: function (porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     }
// }

//2.Function Declaration
//2.1
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function (posrsi) {
//         this.energy += posrsi;
//         console.log(`halo ${this.nama}, Selamat makan!`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energy -= jam;
//         console.log('capekk ya, semangat');
//     }
//     return mahasiswa;
// }
// let alif = Mahasiswa('Alifudin', 10);
// let niko = Mahasiswa('Niko', 20);

//2.2
// const methodMahasiswa = {
//     makan: function (posrsi) {
//         this.energy += posrsi;
//         console.log(`halo ${this.nama}, Selamat makan!`);
//     },
//     main: function (jam) {
//         this.energy -= jam;
//         console.log('capekk ya, semangat');
//     }
// }
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     return mahasiswa;
// }

// let alif = Mahasiswa('Alifudin', 10);
// let niko = Mahasiswa('Niko', 20);




//3. Constructor Function nda ada let sama return
// function Mahasiswa(nama, energy) {

//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function (posrsi) {
//         this.energy += posrsi;
//         console.log(`halo ${this.nama}, Selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energy -= jam;
//         console.log('capekk ya, semangat');
//     }

// }
// let alif = new Mahasiswa('Alifudin', 10);
// let niko = new Mahasiswa('Niko', 20);

//4. Object create
// const methodMahasiswa = {
//     makan: function (posrsi) {
//         this.energy += posrsi;
//         console.log(`halo ${this.nama}, Selamat makan!`);
//     },
//     main: function (jam) {
//         this.energy -= jam;
//         console.log('capekk ya, semangat');
//     }
// }
// function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     return mahasiswa;
// }

// let alif = Mahasiswa('Alifudin', 10);
// let niko = Mahasiswa('Niko', 20);


//Prototype
// function Mahasiswa(nama, energy) {
//     // let mthis = Object.create(Mahasiswa.prototype);
//     this.nama = nama;
//     this.energy = energy;
// }
// Mahasiswa.prototype.makan = function (porsi) {
//     this.energy += porsi;
//     return `Halo ${this.nama}, Selamatmakan`;
// }
// let alif = new Mahasiswa('alif', 10);

//versi class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }
//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, Selamatmakan`;
//     }
// }
// let alif = new Mahasiswa('alif', 10);


let angka = [];
let angka = new Array();


