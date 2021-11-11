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


// let mahasiswa = ['Alifudin', 'niko', 'priambodo'];

//biasa
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf);

//arrow function
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jumlah: nama.length }));
// console.log(jumlahHuruf);
// console.table(jumlahHuruf);


//Konsep this pada Arrow Function

// //Construktor function
// const Mahasiswa = function () {
//     this.nama = 'Alif';
//     this.umur = 33;
//     // console.log(this);
//     this.sayHello = function () {
//         console.log(`Halo, nama ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }
// const alif = new Mahasiswa();


// //Arrow function
// const Mahasiswa = function () {
//     this.nama = 'Alif';
//     this.umur = 33;
//     // console.log(this);
//     this.sayHello = function() {
//         console.log(`Halo, nama ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }
// const alif = new Mahasiswa();

// //Object Literal
// const mhs1 = {
//     nama: 'Alif',
//     umur: '22',
//     sayHello: function () {
//         console.log(`Halo, nama ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }


// const Mahasiswa = function () {
//     this.nama = 'Alif';
//     this.umur = 33;
//     // console.log(this);
//     this.sayHello = function () {
//         console.log(`Halo, nama ${this.nama}, dan saya ${this.umur} tahun`);
//     }
//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }
// const alif = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function () {

    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        // satu = temp;
        // satu = dua;
        // dua = temp;
        [satu, dua] = [dua, satu];
    }

    // console.log(this)
    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);

});