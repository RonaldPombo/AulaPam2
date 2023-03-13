function Imc(){
    var nome = document.getElementById('nome').value
    var altura = parseFloat(document.getElementById('altura').value)
    var peso = parseFloat(document.getElementById('peso').value)
    var resultado = (peso / (altura * altura)).toFixed(2)
    document.getElementById("imc").innerHTML = "Olá " + nome + " seu imc é " + resultado
    if(resultado < 18.5)
    {
            document.getElementById("imc2").innerHTML = "Classificado como magreza"
    }else if(resultado => 18.5 || resultado <= 24.9)
    {
            document.getElementById("imc2").innerHTML = "Classificado como saudavel"
    }else if(resultado => 25 || resultado <= 29.9)
    {
            document.getElementById("imc2").innerHTML = "Classificado como sobrepeso"
    }else if(resultado => 30 || resultado <= 34.9)
    {
            document.getElementById("imc2").innerHTML = "Classificado como obesidade grau 1"
    }else if(resultado => 35 || resultado <= 39.9)
    {
            document.getElementById("imc2").innerHTML = "Classificado como obesidade grau 2"
    }else
    {
            document.getElementById("imc2").innerHTML = "Classificado como obesidade grau 3"
    }
}