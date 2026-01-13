//*Votre JavaScript va devoir ajouter une <li> qui contient le texte Préchauffer le four au début de la <ol>.**


let ol = document.querySelector("ol");  // sélectionner le ol
let item = document.createElement("li");  // créer un li
let itemText =document.createTextNode("Préchauffer le four");   // créer le texte de li 


item.appendChild(itemText); // ajouter le texte dans le li 
ol.insertBefore(item ,ol.firstChild);  //ajouter le li au debut de la list

