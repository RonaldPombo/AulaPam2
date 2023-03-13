function Imc(){
    var nome = documente.getElementById(nome)
    var altura = parseFloat(document.getElementById('altura').value)
    var peso = parseFloat(document.getElementById('peso').value)
    document.getElementById('imc').style.marginLeft = "41vw"
    var resultado = (peso / (altura * altura)).toFixed(2)
    document.getElementById("imc").textContent = "Olá " + nome + "seu imc é" + resultado
}