function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
  
    if (isNaN(altura) || isNaN(peso)) {
      alert("Error: Ingrese valores numéricos válidos para altura y peso.");
      return;
    }
  
    const imc = peso / (altura / 100) ** 2;
    const resultado = `Su IMC es: ${imc.toFixed(2)}`;
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  