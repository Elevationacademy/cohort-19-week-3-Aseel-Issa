// console.log(document)

const configDistance = function(isHorizantal, isPositive) {
    let block = document.getElementById("block")

    let distance 
    if(isHorizantal){
        distance = parseInt(block.style.left) || 0
    }else{
        distance = parseInt(block.style.top) || 0
    }
   
    if((!isHorizantal && !isPositive) || (isHorizantal && isPositive)){
        distance+=15
    }else{
        distance-=15
    }
    
    console.log(distance)
    return distance
  }

const moveRight = function(){
    document.getElementById("block").style.left = configDistance(true, true) +"px"
  }

const moveLeft = function(){
    document.getElementById("block").style.left = (configDistance(true, false)) +"px"
}

const moveUp = function(){
    document.getElementById("block").style.top= (configDistance(false, true)) +"px"
}

const moveDown = function(){
    document.getElementById("block").style.top= (configDistance(false, false)) +"px"
}

  