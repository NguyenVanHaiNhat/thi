function checkPoint(arr) {
    let max = 0;
    let count = 0;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > max) {
                max = arr[j];
            }
        }
    }
    return max;
}
let arr = [1, 2, 3, 4 ,5 ,6];
document.write(checkPoint(arr));