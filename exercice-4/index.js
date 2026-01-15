//Votre JavaScript va devoir faire en sorte d'afficher un <ul> qui contient une <li> pour chacune des tâches du tableau todos

// Votre JavaScript va devoir faire en sorte que lorsque l'on clique sur l'une de ces <li> son texte devient barré.

window.addEventListener("DOMContentLoaded", () => {
    let todos = [
        "Rappeler l'école",
        "Faire les courses",
        "Récupérer le colis à la Poste",
        "Faire la litière du chat",
        "Ranger le bureau"
    ];
    let body = document.querySelector("body");
    let list = document.createElement("ul");
    
    for(let i=0 ; i<todos.length ; i++){
        let itemList = document.createElement("li");
        
        //  itemListText=document.createTextNode(todos[i]); 
        
        itemList.textContent=todos[i];
        list.appendChild(itemList);
        
        itemList.addEventListener("click" , (event) =>{
        itemList.style.textDecoration="line-through";
        });
  
    }
    body.appendChild(list);
   
});




    


