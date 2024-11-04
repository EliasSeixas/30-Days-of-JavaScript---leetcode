var filter = function(arr, fn) {
    let i = 0;
    const novoArray = [];
    while(i < arr.length) {
        if (fn(arr[i], i)) {
            novoArray.push(arr[i]);
        }
        i++;
    }
    return novoArray;
};