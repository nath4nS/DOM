-- Manipulando Conteúdos

// textContent
const element = document.querySelector('h1')

element.textContent += " Olá Devs!"

console.log(element.textContent)


// innetText

const element = document.querySelector('h1')

element.innerText = "Olá Devs!"


// innerHTML

const element = document.querySelector('h1')

element.innerHTML = "Olá devs! <small>!!!</small>"


// value

const element = document.querySelector('input')

console.log(element.value)
element.value = "Outro valor"


// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'))

header.removeAttribute('id')

header.setAttribute('class', 'bg header')