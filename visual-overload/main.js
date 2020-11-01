

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const getRandomColor = function(){
    let color = 'rgb('+getRandomInt(256)+', '+getRandomInt(256)+', '+getRandomInt(256)+')'
    return color
}

const changeColor = function(box){
    box.style.backgroundColor = getRandomColor()
}
const createBtns = function(numOfBtns){
    let container = document.getElementById('container')
    for(let i=0; i<numOfBtns; i++){
        let box = document.createElement('div')
        box.id = 'box_'+i
        box.style.left = (i * (70 + 5))+'px'
        box.style.border = '5px'
        box.style.display = 'block'
        box.style.height = '70px'
        box.style.width = '70px'
        box.style.position = 'absolute'
        box.style.backgroundColor = getRandomColor()
        box.onmouseenter = function(){
            changeColor(this)
        }
        container.appendChild(box)
    }
}

createBtns(6)