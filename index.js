'use strict';

const speak = function(arr){
    const newArray = [];
    for(const i of arr){
        newArray.push(i.toUpperCase());
    }
    console.log(i);
    return newArray;
}
const res = speak(['a', 'b', 'c']);
console.log(res);
