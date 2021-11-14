// Rest Paramter

// function myFunction(a, b, ...myArgs) {
//     return myArgs;
// }
function myFunction(...myArgs) {
    // return myArgs;
    // return arguments; // Bukan array tapi object
    // return Array.from(arguments); //  array tapi object
    // return Array.from(arguments); //  array tapi object
    return [...arguments];
}

console.log(myFunction(1, 2, 3, 4, 5, 6));


function jumlahkan(...angka) {

    //cara pertama
    // let total = 0;
    // for (const a of angka) {
    //     total += a;
    // }
    // return total;

    //cara kedua
    return angka.reduce((a, b) => a + b);

}
console.log(jumlahkan(1, 2, 3, 4, 5));



//array destructuring

const kelompok1 = ['Sandika', 'alif', 'niko'];
const [ketua, wakil, ...anggota] = kelompok1;


//object destructuring
const team = {
    pm: 'niko',
    fe: 'alif',
    be: 'alif'
}
const { pm, ...myteam } = team;
console.log(myteam);



//filtering

function filterby(type, ...values) {
    return values.filter(v => typeof v == type);

}
console.log(filterby('number', 1, 2, 3, 4, 'false', 'niko', 6));
console.log(filterby('string', 1, 2, 3, 4, false, 'niko', 6));
console.log(filterby('boolean', 1, 2, 3, 4, false, 'niko', 6));











