var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-links");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// *********** side menu ************* 
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// const typed = new Typed('.multiple-text', {
//     strings: ['Fronted Developer', 'Web Design', 'Programmer'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true,
// });