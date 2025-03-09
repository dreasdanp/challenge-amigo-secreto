// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

     amigos.push(nombre);
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultadoSorteo").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
} */

    let amigos = [];

    function agregarAmigo() {
        let input = document.getElementById("nombreAmigo");
        let nombre = input.value.trim();
    
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }
    
        amigos.push(nombre);
        input.value = ""; // Limpiar el campo de entrada
        actualizarLista();
    }
    
    function actualizarLista() {
        let lista = document.querySelector(".name-list");
        lista.innerHTML = ""; // Limpiar la lista antes de actualizar
        amigos.forEach(amigo => {
            let li = document.createElement("li");
            li.textContent = amigo;
            lista.appendChild(li);
        });
    }
    
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }
    
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.querySelector(".result-list").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
    }