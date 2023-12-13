const h1 = document.querySelector('h1')
// should console.log to check to make sure you grabbed the right one

function changeColor(){
    h1.style.color = "Blue"
}

h1.addEventListener('mouseover', changeColor)
//if has a named function above can remove () to invoke the function changeColor

h1.addEventListener('mouseout', () => h1.style.color = "black")
// () is invocating a function to change the color to black when the even happens

// can do it this way as well
// function changeColor(){
//     if (isMouseOver){
//         h1.style.color = 'green'
//     }
//     else {
//         h1.style.color = 'black'
//     }
// }

// h1.addEventListener('mouseover', () => changeColor(true))
// h1.addEventListener('mouseout', () => changeColor(false))

const btn1 = document.querySelector('#button1')
//console.log(btn1)
function changeButtonText(){
    btn1.textContent = 'Clicked!'
    //btn1.innerText = 'Clicked!'
}
btn1.addEventListener('click', changeButtonText)

// const btn2 = document.querySelector('#button2')
// //console.log(btn2)
// function changeButtonBackground(){
//     btn2.style.backgroundColor = 'goldenrod'
// }
// btn2.addEventListener('click', changeButtonBackground)

//could also be doing the whole background (when wording is weird
//like the question can do either above or below)
const btn2 = document.querySelector('#button2')
const bg = document.querySelector('body')
function changeBGColor(){
    bg.style['background-color'] = 'goldenrod'
    //bg.style.backgroundColor = 'goldenrod'
}
btn2.addEventListener('click', changeBGColor)
// btn2.addEventListener('click', () => bg.style.backkgroundColor = 'goldenrod')

const form = document.querySelector('form')
//console.log(form)

// handleSubmit
form.addEventListener('submit', (e) => handleSubmit(e))
// form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault()
    const name = e.target.name.value
    const p = document.querySelector('p')
    p.textContent = `Welcome, ${name}!`
    //p.innerText = `Welcome, ${name}!`
}

// auto behavior on a submit is to refresh the browser immediately