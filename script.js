let timeBox = document.querySelector(".time-box")
let alertBox = document.querySelector(".alert")
let exitBox = document.querySelector(".exit")
let askUser = document.querySelector(".ask-user")
let bodyy = document.querySelector("body")
let count = 0
let isActive = false
let tryAgain = document.querySelector(".yes")
let dontTryAgain = document.querySelector(".no")

function checkIdle() {
    setInterval(() => {
        count++
    if (!isActive) {
        if (count <= 10) { 
          
            timeBox.innerHTML = `00:0${count}`
            bodyy.addEventListener("mousemove", (e) => {
                count = -1
            })
            if (count === 10) {
                timeBox.innerHTML = `00:${count}`
                alertBox.classList.add("active")
                isActive = true
            
            }
        
        }
} 
    }, 1000);
}

checkIdle()


let continueBtn = document.querySelector(".continue-btns")

function restartCounter(){
    alertBox.classList.remove("active")
    let count = 0
    let isActive = false

    setInterval(() => {
        count++
    if (!isActive) {
        if (count <= 10) { 
          
            timeBox.innerHTML = `00:0${count}`
            bodyy.addEventListener("mousemove", (e) => {
                count = -1
            })
           
            if (count === 10) {
                timeBox.innerHTML = `00:${count}`
                alertBox.classList.add("active")
                isActive = true
            
            }
        
        }
} 
    }, 1000);
}

continueBtn.addEventListener("click", restartCounter)

let exitBtn = document.querySelector(".exit-btn")

function cancelAction() {
    alertBox.classList.remove("active")
    exitBox.classList.add("active")
    
    setTimeout(()=> {
      exitBox.classList.remove("active")
      askUser.classList.add("active")
    }, 2000)
}

exitBtn.addEventListener("click", cancelAction)

tryAgain.addEventListener("click", ()=>{
  askUser.classList.remove("active")
  restartCounter()
})

function removeAll(){
  askUser.classList.remove("active")
  exitBox.classList.add("active")
}
dontTryAgain.addEventListener("click", removeAll)