// callback


// Synchronous Callback

// // 1.
// function halo(nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkan(callback) {
//     const nama = prompt('Masukan Nama : ');
//     callback(nama);
// }

// tampilkan(halo);

// // 2.
// tampilkan((nama) => {
//     alert(`Halo, ${nama}`);
// })

// // 3. Array of Object
// const mhs = [
//     {
//         "nama": "Alifudinnniko",
//         "nim": "M3118007"

//     }, {
//         "nama": "Niko",
//         "nim": "M3118005"
//     }, {
//         "nama": "Pira",
//         "nim": "M3118003"
//     }
// ];
// console.log('mulai');
// mhs.forEach(m => {

//     console.log(m.nama);
// });
// console.log('selesai');


// //Asynchronous Callback

// function getDataMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);

//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// getDataMahasiswa('.json', success, error);

// // Vanila Javascript (murni) => Ansyncronous Callback
// console.log('mulai');
// getDataMahasiswa('.json', result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });
// console.log('selesai');

// Jquery
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
        // console.log(mhs);
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');






























