'use strict';


import table from '../data/table';

let surface = {};

let titleA = table.titles[0];
let titleB = table.titles[1];

let itemsA = table.dict[titleA.name];

for(let name in itemsA){
    surface[name] = [];

    let dict = {};

    table.rows.forEach(row => {
        let valA = row[titleA.name]
        if(valA !== name){
            return;
        }

        let valB = row[titleB.name];

        if(!dict.hasOwnProperty(valB)){
            dict[valB] = true;
            surface[name].push(valB);
        }
    })
}

export default surface
