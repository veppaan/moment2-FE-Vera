//Vera Kippel veki2400

"use strict";

let courses = [];

window.onload = () =>{
    loadCourses();
}

async function loadCourses(){
    try{
        const response = await fetch("ramschema_ht24.json");
        const data = await response.json();

        console.table(data);
    }catch(error){
            console.error(error);
        }
}