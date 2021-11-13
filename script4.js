// ambil semua elemen video

const videos = Array.from(document.querySelectorAll('[data-duration]'));
// console.log(videos);

// ppilih hanya kata javascript
// const java = videos.filter(video => video.textContent.includes('JAVASCRIPT'));


// ambil durasi masing2 video 
// const java = videos.filter(video => video.textContent.includes('JAVASCRIPT'))
//     .map(item => item.dataset.duration);

// console.log(java);


// kan durasi (string) -> ubah durasi menjadi float, ubah menit menjadi detik
// const java = videos.filter(video => video.textContent.includes('JAVASCRIPT'))
//     .map(item => item.dataset.duration)
//     .map(waktu => {
//         //10:30 -> {10,30} split
//         const parts = waktu.split(':').map(part => parseFloat(part));
//         return (parts[0] * 60) + parts[1];
//     })

// jumlahkan semua detik
let java = videos.filter(video => video.textContent.includes('JAVASCRIPT'))
    .map(item => item.dataset.duration)
    .map(waktu => {
        //10:30 -> {10,30} split
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
    .reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik
const jam = Math.floor(java / 3600);
java = java - jam * 3600;
const menit = Math.floor(java / 60);
const detik = java - menit * 60;


// simpan di DOM
const pDurasi = document.querySelector('.total-video');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} detik.`;
const jumlahvideo = videos.filter(video => video.textContent.includes('JAVASCRIPT')).length;
const pJumlahvideo = document.querySelector('.jumlah-video');
pJumlahvideo.textContent = `${jumlahvideo} Video.`;


console.log(detik);