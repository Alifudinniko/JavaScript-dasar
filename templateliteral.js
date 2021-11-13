const nama = `Sandika`;
const umur = 22;
console.log(`Halo ${nama}, kok umurmu ${umur}`);

// Embedded XPathExpression
console.log(`${1 + 1}`);
console.log(`${alert('Semangat')}`);

const x = 1;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

const el = `<div class="mhs">
<h2>     ${nama}    </h2>
<span class="nrp">  ${umur}  </span>

</div>;`

console.log(el);