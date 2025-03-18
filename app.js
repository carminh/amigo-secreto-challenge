// Destacar que realicé el código en inglés porque a lo largo de los cursos  me gustó la idea de practicar
// mi lógica y su desarrollo en el idioma inglés.


// Lista de los nombres de amigos
let friends = [];

// Función para agregar amigo
function addFriend() {
    let inputFriend = document.getElementById('friend'); // Corrección del ID
    let friendName = inputFriend.value.trim();

    inputFriend.value = "";

    // Validar campo no vacío
    if (friendName === "") {
        alert("Please, insert a friend's name");
        return;
    };

    // Validar que nombre no esté duplicado
    if (friends.includes(friendName)) { // Corrección aquí
        alert(`${friendName} is already in the list`);
        return;
    };

    // Agregar el nombre al array de amigos
    friends.push(friendName);

    freshListofFriends();
};

// Función para actualizar la lista de amigos en pantalla
function freshListofFriends() {
    let listofFriends = document.getElementById('listofFriends'); // Corrección aquí
    listofFriends.innerHTML = "";

    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement('li');
        li.textContent = friends[i];
        listofFriends.appendChild(li);
    };
};

// Función para sortear un amigo
function raffleFriend() {
    if (friends.length === 0) {
        alert("There's no friends available to raffle. Add one");
        return;
    };

    let randomIndex = Math.floor(Math.random() * friends.length);
    let raffledFriend = friends[randomIndex];
    
    let resultado = document.getElementById('resultado'); // Corrección aquí
    resultado.innerHTML = `Amigo/a sorteado: <strong>${raffledFriend}</strong>`;
};
