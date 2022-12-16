"use Strict"
window.onload = function (){
    let viewAllBtn = document.getElementById("ViewAllBtn");
    viewAllBtn.onclick =viewAllBtnOnclicked;
    let todoSelects= document.getElementById("userSelect");
    todoSelects.style.display="none"
    selectinputs()
    todoSelects.onchange=todoSelectsOnchange
    let cardEdit =document.getElementById("cardEdit")
    cardEdit.style.display="none"
}


function viewAllBtnOnclicked (){
    let todoSelects= document.getElementById("userSelect")
    todoSelects.style.display="block"

}
function selectinputs(){
    let todoSelects= document.getElementById("userSelect")
    fetch(`http://localhost:8083/api/users`)
        .then(res => res.json())
        .then(info =>{
            for (let i of info ){
                let newOptions= new Option (i.name,i.id)

                todoSelects.appendChild(newOptions)
            }

        })
}


function todoSelectsOnchange(){
    let cardEdit =document.getElementById("cardEdit")
    
    let category=document.getElementById("category")
    let description=document.getElementById("description")
    let completed =document.getElementById("completed")
    let todoSelects= document.getElementById("userSelect")
    
    let todoSelectsValue= todoSelects.value
        fetch(`http://localhost:8083/api/todos/${todoSelectsValue}`)
        .then(res => res.json())
        .then(info =>{
            cardEdit.style.display="block"
            category.innerHTML=info.category
            description.innerHTML=info.description
            completed.innerHTML= info.completed
        })

}