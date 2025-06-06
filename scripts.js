function calcularProbabilidade() {
  const pA = parseFloat(document.getElementById('pA').value); 
  const pBDadoA = parseFloat(document.getElementById('pBDadoA').value); 
  const pBDadoNaoA = parseFloat(document.getElementById('pBDadoNaoA').value); 
  
  const pNaoA = 1 - pA;
  
  const numerador = pBDadoA * pA;
  const denominador = (pBDadoA * pA) + (pBDadoNaoA * pNaoA);
  
  const pADadoB = numerador / denominador;
  
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `Resultado final: P(A|B) = ${pADadoB.toFixed(4)} (${(pADadoB * 100).toFixed(2)}%)`;
}
