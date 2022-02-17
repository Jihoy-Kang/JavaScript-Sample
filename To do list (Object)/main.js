let taskInput = document.getElementById("task-input")
let addButton = document.getElementById("add-button")
let checkButton = document.getElementById("check-button")
let deleteButton = document.getElementById("delete-button")

let taskList = []

addButton.addEventListener("click",addTask) // 클릭했을때 내용추가되는 버튼


taskInput.addEventListener("focus",function(){taskInput.value=" "}) // 입력창에 마우스 클릭 시 값 초기화

function addTask(){
    let task = {
        id : randomId(),
        taskContent : taskInput.value,
        isComplete : false
    }
    taskList.push(task)
    console.log(taskList)
    render()
}



function render(){
    let resultHTML = " "
    for(let i=0; i<taskList.length ; i++){
        resultHTML += `
        <div id = "task-board">
            <div>
                ${taskList[i].taskContent}
            </div>
            <div>
                <button onclick="checkThrough('${taskList[i].id}')">Check</button>
                <button id="delete-button">Delete</button>
            </div>
        </div>`
    }

    document.getElementById("task-area").innerHTML = resultHTML
}

function checkThrough(id){
    console.log(id)
}


// id 생성함수
function randomId(){
    return '_' + Math.random().toString(36).substring(2, 9);
}