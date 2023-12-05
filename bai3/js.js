function checkString(str1, str2){
    let result = 0;
    for (let i = 0; i < str2.length; i++) {
        for (let j = 0; j < str1.length; j++) {
            if (str1[j] === str2[i]){
                result = true;
                break;
            } else
                result = false;
                break;
        }
        break;
    }
    return result;
}

let str1 = "dep";
let str2 = "nhat dep trai";

document.write(checkString(str1, str2));