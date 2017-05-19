'use strict';

const upper = (str) => {
    return str.toUpperCase();
}
const low = (str) => {
    return str.toLowerCase();
}
const PORT = 8080;
//Fat arrow function , lambda function
module.exports = {
    one : upper,
    two : low,
    PORT
}
