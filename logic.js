'use strict';
const striptags = require('striptags');

exports.processWords = function(body, k=10){
    // console.log(body);
    body = striptags(body);
    let arr = body.split(/\s+|\n+|–|-/);
    let hash = {};
    let max = 0;
    arr.forEach(a=>{   //iterating through the words array to hash words and find max occuring word
        if(a && hash.hasOwnProperty(a)){
            hash[a]++;
            if(hash[a] > max)
                max = hash[a];
        }
        else
            hash[a] = 1;
    });

    let newarray = new Array(max+1);
    Object.entries(hash).forEach(([key, value])=>{
        if(!newarray[value])
            newarray[value] = [];
        newarray[value].push(key);
    });

    let karray = [];
    for(let i=max; i>0; i--){
        if(newarray[i] && newarray[i].length > 0){
            karray.push({word:newarray[i].shift(), count:i});
            if(karray.length >= k)
                return karray;
        }
    }    

    return karray;
    
}

