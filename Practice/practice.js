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
    let task = {
        id : ranId(),
        taskContents : taskInput.value,
        isComplete : false
    }
    taskList.push(task)
    console.log(task)
    render() 
}

function render(){
    let resultHTML = "";
    for(let i =0 ; i < taskList.length ; i++){
        if(taskList[i].isComplete == true){
            resultHTML +=
            `<section class="task-bar">
                <div class="doneCheck">${taskList[i].taskContents}</div>
                <div>
                <button onclick="toggleButton('${taskList[i].id}')">Check</button>
                <button onclick="deleteButton('${taskList[i].id}')">Delete</button>
                </div>
            </section>
            <div class="task-underline"></div>`
        }else{
            resultHTML +=
            `<section class="task-bar">
                <div>${taskList[i].taskContents}</div>
                <div>
                    <button onclick="toggleButton('${taskList[i].id}')">Check</button> 
                    <button onclick="deleteButton('${taskList[i].id}')">Delete</button>
                </div>
            </section>
            <div class="task-underline"></div>`
        }
    }

    document.getElementById("task-board").innerHTML = resultHTML
}
// onclick="함수명()" 은 html에서 바로 함수를 불러올수 있는 클릭이벤트

// 입력창 선택시 값 삭제

taskInput.addEventListener("focus",function(){taskInput.value=""})

// 엔터입력시 아이템 추가

function enterKey(){
    if (window.event.keyCode == 13){
        addTask()
    }
}

//랜덤 아이디 생성
function ranId(){
    return '_' + Math.random().toString(36).substr(2, 9);
}

//체크버튼
function toggleButton(id){
    for(let i = 0 ; i < taskList.length ; i++){
        if(taskList[i].id == id){
            taskList[i].isComplete = !taskList[i].isComplete
        }
    }
    render()
}


//삭제버튼
function deleteButton(id){
    for(let i = 0 ; i < taskList.length ; i++){
        if(taskList[i].id==id){
            taskList.splice(i,1)
        } 
    }
    render()
}