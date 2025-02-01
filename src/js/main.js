//Vera Kippel veki2400

"use strict";

let courses = [];

window.onload = () =>{
    loadCourses();
}

async function loadCourses(){
    try{
        const response = await fetch("https://webbutveckling.miun.se/files/ramschema_ht24.json");
        if(!response.ok){
            throw new Error("Fel vid ladding av data...");
        }
        const data = await response.json();


        console.table(data);
    }catch(error){
            console.error(error);
            document.querySelector("#error").innerHTML = "<p>Ett fel uppstod - prova igen senare!</p>"
        }
}