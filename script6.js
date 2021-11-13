//Destructuring variable / assigment

//destructuring array
// const perkenalan = ['Halo', 'Nama', 'saya'];
// // const [a, b, c] = perkenalan;
// const [a, , c] = perkenalan;
// console.log(c);

// // swap Items
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);


// //return value pada Function
// function coba() {
//     return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);


// //rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(values);


// //Destructuring Object
// const mhs = {
//     nama: 'Alifudinnniko',
//     umur: 33
// }
// const { nama, umur } = mhs;
// console.log(nama);


// //Assigment tanpa deklarasi object
// ({ nama, umur } = {
//     nama: 'Alifudinnniko',
//     umur: 33
// })
// console.log(umur);

// //Assign ke variable baru ( : )
// const mhs = {
//     nama: 'Alifudinniko',
//     umur: 33
// }
// const { nama: n, umur } = mhs;
// console.log(n);

// // Memberikan Default Value  ( = )
// const mhs = {
//     nama: 'Alifudinniko',

// }
// const { nama: n, umur = 'hehe' } = mhs;
// console.log(umur);

// //rest Parameter
// const mhs = {
//     nama: 'Alifudinniko',
//     umur: 33
// }
// const { nama, ...value } = mhs;
// console.log(nama);
// console.log(value);


// mengambil field pada object, setelah dikirim sebgai
// parameter untuk function
// const mhs = {
//     id: 22,
//     nama: 'Alifudinniko',
//     umur: 33
// }

// function getIdMhs({ id, nama }) {
//     return nama;
// }

// console.log(getIdMhs(mhs));


//4.2

// Destructuring return value

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }
// // const [jumlah, kali, bagi = 'tidak ada'] = kalkulasi(2, 3);
// const { tambah, kurang, bagi, kali } = kalkulasi(6, 3);
// console.log(bagi);

//Destructuring function arguments

//biasa
const mhs1 = {
    nama: 'alif',
    nim: 'm3118007',
    umur: 12,
    nilai: {
        tugas: 80,
        uts: 88,
        uas: 90,
    }
}
// function cetak(mhs) {
//     return `hai ${mhs.nama}, umurmu ${mhs.umur} kann`;
// }
// console.log(cetak(mhs1));

//destructuring
function cetak({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `hai ${nama}, umurmu ${umur} kann
    selamat kamu mendapat nilai tugas ${uas}
    `;
}
console.log(cetak(mhs1));





