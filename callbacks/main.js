

const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = callback => {
    callback()
}

const task_1 = function(){
    pushPull(push) //should print "pushing it!"
    pushPull(pull) //should print "pulling it!"
}

const returnTime = function (time) {
    alert('The current time is: ' + time)
}

const getTime = (callback) => callback(new Date())

const task_2 = function(){
    getTime(returnTime)
}

const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };

  const alertDataFunc = (data) => {
      alert(data)
  }
  const logDataFunc = (data) => {
    console.log(data)
}
  
const task_3 = function(){
    displayData(alertDataFunc, logDataFunc, "I like to party")
}

const add = (a, b, c) => a+b+c

const task_4 = function(){
    console.log(add(1, 2, 3))
}

const capitalize = (data) => console.log(data.charAt(0).toUpperCase()+(data.toLowerCase()).slice(1))

const task_5 = function(){
    capitalize("bOb") // returns Bob
    capitalize("TAYLOR") // returns Taylor
    capitalize("feliSHIA") // returns Felishia
}

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }
const commentOnWeather = (temp) => console.log("It's "+determineWeather(temp))
const task_6 = function(){
    commentOnWeather(30) //returns "It's hot"
    commentOnWeather(22) //returns "It's cold"
}

const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)

  const task_7 = function(){
    explode(shineLight, makeSound, "BOOM")
  }
