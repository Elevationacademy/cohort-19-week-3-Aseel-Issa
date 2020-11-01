

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

const checkReservation = function(){
    let visitorName = document.getElementById('name').value
    let response
    if(reservations[visitorName] != undefined){
        if(reservations[visitorName].claimed){
            response = 'Hmm, someone already claimed this reservation'
        }else{
            response = 'Welcome, '+visitorName
        }

    }else{
        response = 'You have no reservation'
    }
    document.getElementById('response').innerHTML = response
}