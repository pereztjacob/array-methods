function filter(array, n, callback){
    for(let i = 0; i < array.length; i++){
        callback(array[i], i);
    }
}

module.exports = filter;