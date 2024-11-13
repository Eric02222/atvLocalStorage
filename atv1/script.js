const campoLogin = document.getElementById("login");
const campoSenha = document.getElementById("password");
const campoNovoLogin = document.getElementById("novoLogin");
const campoNovaSenha = document.getElementById("novaSenha");
const campoRepSenha = document.getElementById("repSenha");

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let msg = "Usuario ou senha incorreta";



    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        msg = "Nenhum usuario cadastrado no momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                msg = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario))
                window.location.href = "home.html"
                break;
            }
        }
    }
    alert(msg);

}

function cadastra() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const user = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        }

        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(user);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuario cadastrado");
    } else {
        alert("As senhas são diferentes");
    }
}

function deslogar(){
    localStorage.setItem("logado", JSON.stringify(null));
    window.location.href = "index.html";
}

function carrega() {
    let usuarioLogado = JSON.parse(localStorage.getItem("logado"));
    let nome = usuarioLogado.login
    document.getElementById("nome").innerHTML = nome;
}