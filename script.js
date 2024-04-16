const helloWorld = () => {
  const h1 = document.getElementById("helloWorld")
  h1.innerText = "Olá Mundo!"
}

const sum = () => {
  let number1 = document.getElementById("number1").value
  const number2 = document.getElementById("number2").value
  const output = document.getElementById("sum")
  const msg = document.getElementById("mensage")

  const sum = Number(number1) + Number(number2)


  if (!number1 || !number2) {
    msg.innerText = "Digite dois números para somar!"
    output.innerText = ""
  } else {
    msg.innerText = "";
    output.innerText = `A soma é: ${sum}`
  }

  // Zerando os valores dos campos de entrada
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}


const colorById = () => {
  const div = document.getElementById("div")
  div.style.background = "red";
}

const colorByName = () => {
  const div = document.querySelector('[name="div"]')
  div.style.background = "blue";
}

const colorByClass = () => {
  const div = document.getElementsByClassName("div")[0]
  div.style.background = "black";
}
