'use strict';

const retVal = (myList)=>{
    const data = myList.reduce((prev,total) => prev + total);
    const headerpart = data.split('\r\n\r\n')[0];
    const bodypart = data.split('\r\n\r\n')[1];
    const retObj = {};
    const headArray = [];
    const bodyArray = [];
    for(const i of headerpart.split('\r\n')){
        headArray.push(i);
    }
    for(const i of bodypart.split('\r\n')){
        bodyArray.push(i);
    }
    retObj['head'] = headArray;
    retObj['body'] = bodyArray;
    return retObj;
}
}
    module.exports = {
        retVal
    }
