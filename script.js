const input = document.querySelector('#text');
const btn = document.querySelector('#btn');
const color = document.querySelector('#square');
const btnCircle = document.querySelector('#e_btn');
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');
const span = document.querySelector('#range-span')

const colorChange = function(){
  color.style.backgroundColor = input.value
}

btn.addEventListener('click', colorChange)


btnCircle.style.display = 'none';


const circleChange = function (event) {
  span.textContent = event.target.valueAsNumber
  
  circle.style.height = event.target.valueAsNumber + '%'
  circle.style.width = event.target.valueAsNumber + '%' 

  console.log(event.target.valueAsNumber)
}
range.addEventListener('input', circleChange)
range.addEventListener('change', circleChange)


