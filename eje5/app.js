function calcularAreaOsea() {
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    if (isNaN(base) || isNaN(altura)) {
      alert("Error: Ingrese valores numéricos válidos para base y altura.");
      return;
    }
  
    const area = base * altura / 2;
    const resultado = `El área ósea es: ${area.toFixed(2)} metro²`;
  
    document.getElementById("resultado").innerHTML = resultado;
  }
  