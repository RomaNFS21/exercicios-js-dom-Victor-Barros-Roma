function cadastrarUsuario() {
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("dataNasc").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("uf").value;
    const resultado = document.getElementById("resultado");

    //Mudar a orderm da data
    const partes = data.split("-"); 
    const dataFormatada = `${partes[2]}/${partes[1]}/${partes[0]}`;

    resultado.innerText =
        `${nome} nasceu no dia ${dataFormatada} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;

    resultado.style.color = "green";
    resultado.style.fontSize = "24px";
}
