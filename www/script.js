let user_name = localStorage.getItem("name");

if (user_name) {
    let title_node = document.getElementById("title");
    title_node.textContent = `WELCOME TO MY SERVER! Dear, ${user_name}`; 
}else{
    let user_name = prompt("Enter yor name");
    localStorage.setItem("name", user_name);
}


