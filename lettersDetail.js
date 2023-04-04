
async function leesDetail(){
    const id = localStorage.getItem("id");
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const urlTodo = `https://jsonplaceholder.typicode.com/todos?userId=${id}`
    console.log(urlTodo);
    const response = await fetch(url);
    const responseTodo = await fetch(urlTodo);
    if (response.ok){
        const data = await response.json();
        document.getElementById("name").innerText=data.name;
        document.getElementById("city").innerText=data.address.city;
    }
    if (responseTodo.ok){
        const data = await responseTodo.json();
        const completedList = document.getElementById("completed");
        const uncompletedList = document.getElementById("uncompleted");
        data.forEach(element => {
            newItem = document.createElement("li");
            newItem.innerText = element.title;
            if (element.completed) {
                completedList.appendChild(newItem);
            }else{
                uncompletedList.appendChild(newItem);
            }
        });
    }
}

leesDetail()