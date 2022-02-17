//메뉴 슬라이딩

let underLine = document.getElementById("nav-underline")
let navTabs = document.querySelectorAll(".nav-bar div")

navTabs.forEach((tabs) => tabs.addEventListener("click", horizontalIndicator));

function horizontalIndicator(e){
    underLine.style.left = e.currentTarget.offsetLeft + "px";
    underLine.style.width = e.currentTarget.offsetWidth + "px";
    underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight +"px";
}

//할일 추가

let taskInput = document.getElementById("task-input")
let addButton = document.getElementById("add-button")


let taskList = []

addButton.addEventListener("click",addTask)

function addTask(){
    let taskContents = taskInput.value;
    taskList.push(taskContents)
    console.log(taskList)
    render() 
}

function render(){
    let resultHTML = "";
    for(let i =0 ; i < taskList.length ; i++){
        resultHTML +=`<section class="task-bar">
        <div>${taskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </section>
    <div class="task-underline"></div>`
    }

    document.getElementById("task-board").innerHTML = resultHTML
}

// 입력창 선택시 값 삭제

taskInput.addEventListener("focus",function(){taskInput.value=""})

// 엔터입력시 아이템 추가

function enterKey(){
    if (window.event.keyCode == 13){
        addTask()
    }
}
