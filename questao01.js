function inserirTitulo(){

    const textoTitulo = document.getElementById("titulo");
    
    const textoCampo = document.getElementById("txt-titulo").value;
    
    textoTitulo.innerText = textoCampo;

    textoTitulo.style.color = "blue";
}