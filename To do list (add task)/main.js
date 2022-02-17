let taskInput = document.getElementById("task-input")
let addButton = document.getElementById("add-button")

let taskList = []

addButton.addEventListener("click",addTask) // 클릭했을때 내용추가되는 버튼
taskInput.addEventListener("focus",function(){taskInput.value=" "}) // 입력창에 마우스 클릭 시 값 초기화

function addTask(){
    let taskContent = taskInput.value;
    taskList.push(taskContent)
    console.log(taskList)
    render()
}


function enterKey() {
	if (window.event.keyCode == 13) {
        addTask()
        taskInput.value =" "
    }   
}
//엔터키 html input 에 onkeyup="enterkey()" 있어야 작동

function render(){
    let resultHTML = " "
    for(let i=0; i<taskList.length ; i++){
        resultHTML += `
        <div id = "task-board">
            <div>
                ${taskList[i]}
            </div>
            <div>
                <button>Check</button>
                <button>Delete</button>
            </div>
        </div>`
    }

    document.getElementById("task-area").innerHTML = resultHTML
}