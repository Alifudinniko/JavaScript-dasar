// const coba = new Promise(resolve => resolve('selesai'));
// console.log(coba);


// const coba = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesao')
//     }, 2000);
// });

//coba 1
// console.log(coba);    //Pending
// coba.then(() => console.log(coba));     //Fullfiled

// function cobaPromise() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('selesao')
//         }, 2000);
//     });
// }

// // const coba = cobaPromise();
// // coba.then(coba => console.log(coba));

// async function cobaAsync() {
//     const coba = await cobaPromise();
//     console.log(coba);
// }
// cobaAsync();


//coba 2
function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if (waktu < 5000) {
            setTimeout(() => {
                resolve('selesao')
            }, waktu);
        } else {
            reject('kelamaan!');
        }
    });
}

// const coba = cobaPromise();
// coba
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba));

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.error(err);
    }
}
cobaAsync();







