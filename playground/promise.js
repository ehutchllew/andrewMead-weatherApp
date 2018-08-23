
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else {
                reject('Ruh-roh');
            }
        }, 1500);
    })
}

asyncAdd(5, 6)
    .then(resp => {
        return asyncAdd(resp, 19);
    })
    .then(resp => console.log(resp))
    .catch(err => console.log(err));

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Resolved');
//     }, 2500)
// })

// somePromise
//     .then((resp) => {
//         console.log(resp);
//     })
//     .catch(err => console.log(err));