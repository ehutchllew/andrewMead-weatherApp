
var getUser = (id, callback) => {
    var user = {
        id,
        name: 'Papi'
    }
    setTimeout(() => {
        callback(user);
    }, 1000);
}

getUser(5, (user) => {
    console.log(user);
})