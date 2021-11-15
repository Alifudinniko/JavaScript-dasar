
// //Library JQuery
// $.ajax({
//     url: 'http://www.omdbapi.com/?i=tt3896198&apikey=3a8df36d&s=avenger',
//     success: movies => console.log(movies)
// });

// // Vanila Javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             success(xhr.response);

//         } else if (xhr.status === 404) {
//             error();
//         }
//     }
// }
// xhr.open('get', 'http://www.omdbapi.com/?i=tt3896198&apikey=3a8df36d&s=avenger');
// xhr.send();

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=3a8df36d&s=avenger')
//     .then(response => response.json())
//     .then(response => console.log(response));

//Promise

//contoh 1
let ditempati = true;
const janji1 = new Promise((resolve, reject) => {
    if (ditempati) {
        resolve('Janji telah ditepati');

    } else {
        reject('Ingkar Janji');
    }
});

// console.log(janji1);

janji1
    .then(response => console.log('OK: ' + response))
    .catch(response => console.log('Not OK' + response));


//contoh 2
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu');

        }, 2000);
    } else {
        setTimeout(() => {
            resolve('Tidak Ditepati setelah beberapa waktu')
        }, 2000);
    }
});

console.log('mulai');
console.log(janji2.then(() => console.log(janji2)));

janji2
    .finally(() => console.log('Selesai Menunggu'))
    .then(response => console.log('OK: ' + response))
    .catch(response => console.log('Not OK' + response));

console.log('selesai')



//Promise All

//misalkan kmu akan konect 2 api berbeda
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avenger',
            sutradara: 'niko'
        }])
    }, 1000);
});


const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'solo',
            temp: 36
        }]);
    }, 500);
});


film.then(response => console.log(response));
cuaca.then(response => console.log(response));


Promise.all([film, cuaca])
    // .then(response => console.log(response));
    .then(response => {
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    });


































































