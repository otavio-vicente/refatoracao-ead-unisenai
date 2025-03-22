/* ATENÇÃO: Não mecher nesse código, pode quebrar o sistema */

var usuariosArray = []; 

function adicionarusuario(){
    var nome = document.getElementById("nomeUsuario").value;
    var email = document.getElementById("emailUsuario").value;
    var msgErro = document.getElementById("mensagemErro");

    if (nome === "" || email === "") {
        msgErro.textContent = "Preencha todos os campos!";
        msgErro.style.display = "block"; // Exibe a mensagem de erro
        return;
    }

    // Limpa a mensagem de erro se os campos estiverem preenchidos
    msgErro.style.display = "none";

    var usuario = { nome: nome, email: email };
    usuariosArray.push(usuario);

    console.log(usuariosArray);

    var li = document.createElement("li");
    li.innerHTML = nome + " - " + email + " <button onclick='removeuser(\"" + email + "\")'>Remover</button>";
    document.getElementById("listausers").appendChild(li);

    document.getElementById("nomeUsuario").value = "";
    document.getElementById("emailUsuario").value = "";
}

function removeuser(email) {
    for (var i = 0; i < usuariosArray.length; i++) {
        if (usuariosArray[i].email === email) {
            usuariosArray.splice(i, 1);

            console.log("Hehehe, chablau, foi pro espeto!");
            break;
        }
    }

    document.getElementById("listausers").innerHTML = "";
    for (var i = 0; i < usuariosArray.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = usuariosArray[i].nome + " - " + usuariosArray[i].email + " <button onclick='removeuser(\"" + usuariosArray[i].email + "\")'>Remover</button>";
        document.getElementById("listausers").appendChild(li);
    }
}
