///*****Votre JavaScript va devoir ajouter un <a> à la fin du body dont le texte est****
//**l'article de Wikipédia sur le Lorem Ipsum et l'attribut href est https://fr.wikipedia.org/wiki/Lorem_ipsum**
            //****************************************//
            
            
let body =document.querySelector("body");  // sélectionner le body
let link = document.createElement("a");   // créer un a pour ajouter dedans un line hyper text

////****==> ici j'utlise pas le createTextNode pour ajouter le text 

link.setAttribute("href", "https://fr.wikipedia.org/wiki/Lorem_ipsum"); // ajouter le line 
//linkText = document.createTextNode("l'article de Wikipédia sur le Lorem Ipsum");
//link.appendchild(linkText);
link.textContent = "l'article de Wikipédia sur le Lorem Ipsum";  // ajouter le texte 
document.body.appendChild(link); 








