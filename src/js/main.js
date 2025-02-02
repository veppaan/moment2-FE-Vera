//Vera Kippel veki2400

"use strict";

let courses = [];
let nameEl = document.getElementById("course-name");
let codeEl = document.getElementById("course-code");
let progressionEl = document.getElementById("progression");

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

    data.forEach(a => {
        coursesEl.innerHTML += `<tr><td>${a.code}</td><td>${a.coursename}</td><td>${a.progression}</td></tr> `
    });

    nameEl.addEventListener("click", () => sortName(data));
    codeEl.addEventListener("click", () => sortCode(data));
    progressionEl.addEventListener("click", () => sortProgression(data));
}

function sortName(data){
    const coursesEl = document.getElementById("course");
    coursesEl.innerHTML= "";
    data.sort((a, b) => a.coursename > b.coursename ? 1 : -1);
    data.forEach(a => {
        coursesEl.innerHTML += `<tr><td>${a.code}</td><td>${a.coursename}</td><td>${a.progression}</td></tr> `
    });
}
function sortCode(data){
    const coursesEl = document.getElementById("course");
    coursesEl.innerHTML= "";
    data.sort((a, b) => a.code > b.code ? 1 : -1);
    data.forEach(a => {
        coursesEl.innerHTML += `<tr><td>${a.code}</td><td>${a.coursename}</td><td>${a.progression}</td></tr> `
    });
}
function sortProgression(data){
    const coursesEl = document.getElementById("course");
    coursesEl.innerHTML= "";
    data.sort((a, b) => a.progression > b.progression ? 1 : -1);
    data.forEach(a => {
        coursesEl.innerHTML += `<tr><td>${a.code}</td><td>${a.coursename}</td><td>${a.progression}</td></tr> `
    });
}


