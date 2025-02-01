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
        courses = await response.json();
        printCourses(courses);

    }catch(error){
            console.error(error);
            document.querySelector("#error").innerHTML = "<p>Ett fel uppstod - prova igen senare!</p>"
        }
}

function printCourses(data){
    const coursesEl = document.getElementById("course");
    coursesEl.innerHTML= "";

    data.sort((a, b) => a.coursename > b.coursename ? 1 : -1);

    console.table(data);
}