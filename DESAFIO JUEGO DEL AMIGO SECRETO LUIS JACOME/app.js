//Variable array para almacenar nombres
let amigos =[];


// Función para agregar amigos
function agregarAmigo() {
    
    //Valor del campo de entrada
   let inputAmigo = document.getElementById ('amigo');
   let nombreAmigo = inputAmigo.value.trim();

   //Validar que el campo de nombre no este vacio
   if (nombreAmigo ==="") {
    alert('Por favor inserte un nombre');
    return;
   }

   //Actualizar el array de amigos
   amigos.push(nombreAmigo);
   
   // limpiar el campo de entrada
   inputAmigo.value='';

   //actualizar lista en HTML
   actualizarLista();

}

// Función para actualizar lista de amigos
function actualizarLista() {

    //obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    //Limpiar lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo
    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;

        // Agregar nuevos elementos a la lista
        lista.appendChild(li);
    });
    
   
}

// Función sortear amigo
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert ('No hay amigos en la lista para sortear.');
        return;
    }
    
    // Generar un indice aleatorio
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    
    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado
    document.getElementById('resultado').textContent = `El amigo secreto es ${amigoSorteado}`;

}
