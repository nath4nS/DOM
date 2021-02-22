-- Selecionando Elementos

// getElementById()

const element = document.getElementById('blog-title');
console.log(element)


// getElementsByClassName()

const element = document.getElementsByClassName('one');
console.log(element)


// getElementsByTagName()

const element = document.getElementsByTagName('meta');
console.log(element)


// querySelector()

const element = document.querySelector('[src]');
console.log(element)


// querySelectorAll()

const elements = document.querySelectorAll('.one');
elements.forEach(el => console.log(el))


/*Qual Usar?
    getElementById (element)
    getElementsByClassName (HTMLCollection)
    getElementsByTagName (HTMLCollection)
    querySelector (element)
    querySelectorAll (Nodelist)
*/