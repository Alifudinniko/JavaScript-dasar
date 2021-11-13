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


// let angka = [];
// let angka = new Array();


//2.1 Execution Context, Hoisting & Score

// Hoisting
// var nama = 'Sandhika';
// console.log(nama);  V

// console.log(nama); X
// var nama = 'Sandhika';

//creation phase pada Global Context
//nama var = undefined
//nama function = fn()
// hoisting
// window = global object
// this = window
//2 objek yang dibuat this sama objek/function

// var nama = 'Alif';
// var umur = 33;
// function sayHello() {
//     return `Halo,  nama saya ${nama}, saya ${umur} tahunn`;
// }

// Function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting

// var nama = 'Alif';
// var username = '@alifudinniko';
// //function (username) -> username = argumen 
// function cetakURL(username) {
//     //console.log(arguments[0]);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }
// console.log(cetakURL(username));
// console.log(cetakURL('@atalanisa', '@alifudinniko'));  //scope

// function a() {
//     console.log('ini a');
//     function b() {
//         console.log('ini b');
//         function c() {
//             console.log('ini c');
//         }
//         c();
//     } b();
// } a();

//coba scope
// function satu() {
//     var nama = 'Alif';
//     console.log(nama);
// }
// function dua() {
//     console.log(nama);
// }
// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('Doody');
// console.log(nama);

// 2.2 closure

//lexical Scope
// function init() {
//     let nama = 'Alif';  //local Variable
//     // let umur = 33;  //local Variable
//     function tampilNama() {  //iner function(closure)
//         console.log(nama); //akses ke parent variable
//         // console.log(umur); //akses ke parent variable
//     }
//     // tampilNama(); //iner function
//     return tampilNama;
//     // console.dir(tampilNama); //ngecek di console
// }
// // init();

// let panggilNama = init();
// panggilNama();

// function init() {
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('alif');

//anonymus function
// function init() {
//     return function (nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('alif');

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`);
//     }
// }
// let selamatpagi = ucapkanSalam('pagi');
// let selamatsiang = ucapkanSalam('siang');

// console.dir(selamatpagi);
// selamatpagi('Alif');

// let add = function () {
//     let counter = 0;
//     return function () {
//         return ++counter;

//     }
// }
// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// //contoh closure
// let add = (function () {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());

