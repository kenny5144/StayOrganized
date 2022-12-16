window.onload= () =>{
userListoptions()
categoryDropDownOptions()

let addBtn= document.getElementById("addTodo");
addBtn.onclick = addBtnOnClicked
}

function userListoptions(){
    let userList= document.getElementById("userList")
    fetch("http://localhost:8083/api/users")
    .then(response => response.json())
    .then(Users => {
        for (let user of Users) {
            let option = new Option(user.name, user.id);
            userList.appendChild(option);
        }
    });
}
function categoryDropDownOptions(){
    let categoryDropDown=document.getElementById("ddCategories")
    fetch("http://localhost:8083/api/categories")
        .then(response => response.json())
        .then(categories => {
            for (let category of categories) {
                let option = new Option(category.name, category.id);
                categoryDropDown.appendChild(option);
            }
        });
}

function addBtnOnClicked(){

    let addTodo={
        userid:document.getElementById("userList").value,
        category:document.getElementById("ddCategories").value,
        description:document.getElementById("description").value,
        deadline:document.getElementById("Deadline"),
        pirority:document.getElementById("pirority").value,

    }
    let output= document.getElementById("Output")

    fetch("http://localhost:8083/api/todos", {
        method: "POST",
        body: JSON.stringify(addTodo),
        headers: {"Content-type":
        "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => {
            
            output.innerHTML="Task Added "
      
        });
    }
