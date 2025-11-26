function mudarForma(){
    const mudarForma = document.getElementById("forma");
    const mudarBotao = document.getElementById("btn-forma");

if (mudarBotao.innerText === "Mudar forma"){
    mudarForma.style.borderRadius = "0%";
    mudarBotao.innerText = "Retornar forma original";
    } else {
        mudarForma.style.borderRadius = "50%";
        mudarBotao.innerText = "Mudar forma";
    }
}