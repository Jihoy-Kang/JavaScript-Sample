let underLine = document.getElementById("under-line");
let underLine2 = document.getElementById("under-line2");
let navTabs = document.querySelectorAll(".nav-bar div");
let sectionTabs = document.querySelectorAll(".section-bar div")


navTabs.forEach((menu) => menu.addEventListener("click", horizontalIndicator))

function horizontalIndicator(e){
    underLine.style.left = e.currentTarget.offsetLeft + "px";
    underLine.style.width = e.currentTarget.offsetWidth + "px";
    underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

function verticalMenu(){
    for(let j = 0;j < sectionTabs.length; j++){
        sectionTabs[j].addEventListener("click", verticalIndicator)
    }
}
verticalMenu()
function verticalIndicator(i){
    underLine2.style.left = i.currentTarget.offsetLeft + "px";
    underLine2.style.width = i.currentTarget.offsetWidth + "px"
    underLine2.style.top = i.currentTarget.offsetHeight + i.currentTarget.offsetTop + "px"
}

