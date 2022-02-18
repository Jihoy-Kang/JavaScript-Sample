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
        if(taskList[i].isComplete == true){
            resultHTML += `
        <div id = "task-board">
            <div class = "task-done">
                ${taskList[i].taskContent}
            </div>
            <div>
                <button onclick="toggleButton('${taskList[i].id}')">Check</button>
                <button id="delete-button">Delete</button>
            </div>
        </div>`
        } else{
            resultHTML += `
        <div id = "task-board">
            <div>
                ${taskList[i].taskContent}
            </div>
            <div>
                <button onclick="toggleButton('${taskList[i].id}')">Check</button>
                <button onclick="deleteTask('${taskList[i].id}')">Delete</button>
            </div>
        </div>`
        }
        
    }

    document.getElementById("task-area").innerHTML = resultHTML
}


//객체 색인 및 설정변경
function toggleButton(id){
    for(let i = 0 ; i < taskList.length ; i++){
        if(taskList[i].id == id ){
            taskList[i].isComplete = !taskList[i].isComplete //!뭐시기 는 반대값을 나타냄 (false -> true, true -> false)
            break
        }
    }
    render()
}


function deleteTask(id){
    for(let i = 0 ; i < taskList.length ; i++){
        if(taskList[i].id==id){
            taskList.splice(i,1)
            break
        }
    }
    render()
}

// id 생성함수
function randomId(){
    return '_' + Math.random().toString(36).substring(2, 9);
}

