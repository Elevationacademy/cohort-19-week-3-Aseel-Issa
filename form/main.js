
const generateError = function (message){
    let validity = document.getElementById('error-section')
    let error = document.createElement('p')
    error.setAttribute('class', 'error')
    error.innerHTML =message
    validity.appendChild(error)
}
const submit = function(){

    
    let name = document.getElementById('name').value
    let salary = document.getElementById('salary').value
    let birthday = document.getElementById('birthday').value
    let phone = document.getElementById('phone').value
  // let message = ""
   let error
    if(name.length <= 2){
        generateError("Name should be more than two letters")
    }
    if(salary<10000 || salary>16000){
        generateError("Salary should be in the range of 10 to 16 thousands")
    }
    if(birthday == ""){
        generateError("Birthday is missing")
    }
    if(phone.length!=10){
        generateError("Phone number should be exactly 10 digits")
    }
}
