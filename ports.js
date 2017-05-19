'use strict';

const upper = (str) => {
    return str.toUpperCase();
}
const low = (str) => {
    return str.toLowerCase();
}
//Fat arrow function , lambda function
module.exports = {
    one : upper,
    two : low
}
