function tryRemoveFromArray(arr, index){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === index){
            arr[i] = arr[length - 1];
        } else {
            document.write(arr);
        }
    }
    return arr;
}

let arr = [1, 3, 4, 5, 6, 7];
document.write(tryRemoveFromArray(arr, 4));