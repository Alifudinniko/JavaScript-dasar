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

//3. Constructor Function
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