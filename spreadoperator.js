//  Spread Operator

//memcah iterables menjadi single element

// const mhs = ['Alifudinniko', 'Alif', 'niko'];

//console.log(...mhs);
//console.log(...mhs[0]);

/// Menggabungkan 2 Array 
// const mhs = ['alif', 'niko'];
// const dosen = ['fila', 'koko'];
// const orang = [...mhs, ...dosen];

// const orang = mhs.concat(dosen);
// console.log(orang);


//Mengcopy Array
// const mhs = ['Alif', 'Niko', 'udin'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'niko';

// console.log(mhs1);


// const liMhs = document.querySelectorAll('li');
// // console.log(liMhs);
// // console.log(liMhs[0].textContent);
// // const mhs = [];
// // for (let i = 0; i < liMhs.length; i++) {
// //     mhs.push(liMhs[i].textContent);
// // }
// // console.log(mhs);


// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
console.log(huruf);

nama.innerHTML = huruf;

















