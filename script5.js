// const mhs = {
//     nama: 'Alifudinniko',
//     umur: 33,
//     nrp: '08222222222',
//     email: 'alifudinniko@student.uns.ac.id'
// };

// const el = `
// <div class="mhs">
//     <h2> ${mhs.nama} </h2>
//     <span class="nrp"> ${mhs.nrp}</span>
// </div>
// `;

// console.log(el);


//2. Looping
// const mhs2 = [
//     {
//         nama: 'Alif',
//         email: 'alif@gmail.com'
//     },
//     {
//         nama: 'Niko',
//         email: 'Niko@gmail.com'

//     },
//     {
//         nama: 'Udin',
//         email: 'udin@gmail.com'
//     }

// ];
// const el = `
// <div class="mhs">
//    ${mhs2.map(m =>
//     `<ul>
//         <li>
//             ${m.nama}
//         </li>
//         <li>
//             ${m.email}
//         </li>
//         </ul>`

// ).join('')} 
//     <span class="nrp"> ${mhs.nrp}</span>
// </div>
// `;

//3. Conditionals
//ternary
// const lagu =
// {
//     judul: 'tetap dalam hati',
//     penyanyi: ' Isyana Saraswati',
//     feat: 'Alif'
// }
// const el = `
// <div class ="lagu">
// <ul>
// <li> ${lagu.penyanyi}</li>
// <li> ${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// </ul>
// </div>
// `;

//4. Nested 
//HTML Fragments bersarang

const mhs =
{
    nama: 'Alif',
    sms: 5,
    matakuliah: [
        'desweb',
        'oop',
        'algo',
        'bing'
    ]
};
function cetakMatkul(matakuliah) {
    return `
    <ul>
    ${matakuliah.map(mk => `<li>${mk}</li>`).join('')}
   </ul>
    `;
}

const el =
    `
<div class="mhs">

<h2> ${mhs.nama} </h2>

<span class="semester" > Semester : ${mhs.sms}</span>

<h4> Mata Kuliah : </h4>    ${cetakMatkul(mhs.matakuliah)}  
 
</div>
`;

document.body.innerHTML = el;