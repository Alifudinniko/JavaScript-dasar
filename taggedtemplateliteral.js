// const nama = `Sandika`;
// const umur = 22;
// console.log(`Halo ${nama}, kok umurmu ${umur}`);

// // Embedded XPathExpression
// console.log(`${1 + 1}`);
// console.log(`${alert('Semangat')}`);

// const x = 1;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// const el = `<div class="mhs">
// <h2>     ${nama}    </h2>
// <span class="nrp">  ${umur}  </span>

// </div>;`

// console.log(el);

//Tagged Templaes

const nama = 'Alifudinniko';
const umur = 33;


function coba(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;


    return strings.reduce((result, str, i) =>
        `${result}${str}${values[i] || ''} `, '');


}
const str = coba`Halo, nama saya ${nama}, saya umur ${umur} tahun.`;



//Highlight
function Highlight(strings, ...values) {
    return strings.reduce((result, str, i) =>
        `${result}${str}<span class="h1">${values[i] || ''} </span>`, '');

}
const str2 = Highlight`Halo, nama saya ${nama}, saya umur ${umur} tahun.`;

document.body.innerHTML = str2;
console.log(str2);


// 