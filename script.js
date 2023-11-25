function calc(){
    const inputA = document.querySelector("#valorA")
    const inputB = document.querySelector("#valorB")
    const textoSuma = document.querySelector ("#resultadoSuma")
    const textoResta = document.querySelector ("#resultadoResta")
    const textoMultiplicar = document.querySelector ("#resultadoMultiplicar")
    const textoDivision = document.querySelector ("#resultadoDivision")
    const textoModulo = document.querySelector ("#resultadoModulo")
    const textoMenorQue = document.querySelector ("#resultadoMenorQue")
    const textoMayorQue = document.querySelector ("#resultadoMayorQue")
    const textoMayorOigual1 = document.querySelector ("#resultadoMayorOigual1")
    const textoMayorOigual2 = document.querySelector ("#resultadoMayorOigual2")
    const valorA = parseFloat(inputA.value)
    const valorB = parseFloat(inputB.value)
    const resultadoSuma = valorA + valorB
    const resultadoResta = valorA - valorB
    const resultadoMultiplicar = valorA * valorB
    const resultadoDivision = valorA / valorB
    const resultadoModulo = valorA % valorB
    const resultadoMenorQue = valorA < valorB
    const resultadoMayorQue = valorA > valorB
    const resultadoMayorOigual1 = valorA <= valorB
    const resultadoMayorOigual2 = valorA >= valorB
    textoSuma.innerHTML =  `${valorA} + ${valorB} = ${resultadoSuma}`
    textoResta.innerHTML =  `${valorA} - ${valorB} = ${resultadoResta}`
    textoMultiplicar.innerHTML =  `${valorA} * ${valorB} = ${resultadoMultiplicar}`
    textoDivision.innerHTML =  `${valorA} + ${valorB} = ${resultadoDivision}`
    textoModulo.innerHTML =  `${valorA} % ${valorB} = ${resultadoModulo}`
    textoMenorQue.innerHTML =  `${valorA} < ${valorB} = ${resultadoMenorQue}`
    textoMayorQue.innerHTML =  `${valorA} > ${valorB} = ${resultadoMayorQue}`
    textoMayorOigual1.innerHTML =  `${valorA} <= ${valorB} = ${resultadoMayorOigual1}`
    textoMayorOigual2.innerHTML =  `${valorA} <= ${valorB} = ${resultadoMayorOigual2}`
    textoSuma.innerHTML =  `${valorA} >= ${valorB} = ${resultadoMayorOigual2}`
    console.log(resultadoSuma)
    console.log(resultadoResta)
    console.log(resultadoMultiplicar)
    console.log(resultadoDivision)
    console.log(resultadoModulo)
    console.log(resultadoMenorQue)
    console.log(resultadoMayorQue)
    console.log(resultadoMayorOigual1)
    console.log(resultadoMayorOigual2)
    
  }