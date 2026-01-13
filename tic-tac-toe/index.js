
window.addEventListener('DOMContentLoaded', () => {

    // 1- Plateau logique du jeu
    let board = ["", "", "", "", "", "", "", "", ""];
    let boxes = [];
    let gameOver = false;

    // 2- Récupérer toutes les cases 
    for (let i = 0; i < 9; i++) {
        let box = document.getElementById(`box-${i}`);
        boxes.push(box);
    }

    // 3- Définir toutes les conditions de victoire
    const winConditions = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
//**************************************************************************************//

    // 4- Fonction pour vérifier la victoire sans some/ every
    function checkWinner(player) {
        for (let i = 0; i < winConditions.length; i++) {
            let condition = winConditions[i];
            let won = true;

            for (let j = 0; j < condition.length; j++) {
                let index = condition[j];
                if (board[index] !== player) {
                    won = false;
                    break;
                }
            }

            if (won) {
                return true; // victoire trouvée
            }
        }

        return false; // aucune victoire
    }

    // 5- Fonction pour vérifier match nul
    function checkDraw() {
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                return false; // au moins une case vide
            }
        }
        return true; // toutes les cases sont remplies
    }

    // 6- Fonction pour le tour de l'ordinateur
    function computerPlay() {
        if (gameOver) return;

        // Chercher toutes les cases vides
        let emptyIndexes = [];
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") emptyIndexes.push(i);
        }

        if (emptyIndexes.length === 0) return;

        // Choisir une case au hasard
        let randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
        board[randomIndex] = "O";
        boxes[randomIndex].textContent = "O";

        // Vérifier victoire de O
        if (checkWinner("O")) {
            alert("O a gagné !");
            gameOver = true;
        } else if (checkDraw()) {
            alert("Match nul !");
            gameOver = true;
        }
    }

    // 7- Ajouter les clics sur les cases pour X
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        box.addEventListener("click", () => {
            if (board[i] !== "" || gameOver) return;

            board[i] = "X";
            box.textContent = "X";

            if (checkWinner("X")) {
                alert("X a gagné !");
                gameOver = true;
            } else if (checkDraw()) {
                alert("Match nul !");
                gameOver = true;
            } else {
                computerPlay();
            }
        });
    }

    // 8- Bouton Rejouer
    document.getElementById("reset").addEventListener("click", () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = "";
            boxes[i].textContent = "";
        }
        gameOver = false;
    });

});
