//*Votre JavaScript va devoir ajouter l'ingrédient Beurre à la fin de la liste.**

 // let ul = document.getElementsByTagName("ul")tu dois ajouter un [0] pour choisir le premiere ul dans le page html 
let ul = document.querySelector("ul"); // sélectionner la liste
let item = document.createElement("li");        // créer un <li>
let itemText = document.createTextNode("Beurre"); // créer le texte

item.appendChild(itemText) ; // ajouter le texte au <li>
ul.appendChild(item ,);       // ajouter le <li> à la fin de la liste

