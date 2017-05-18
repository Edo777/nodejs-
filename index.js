'use strict';

const speak = function(){
    const arr = ['foo', 'bar', 'baz'];
    for(const i of arr){
        console.log(i.toUpperCase());
    }
}
speak();
