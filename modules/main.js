
const StringFormatter = function(){

    const capitalizeFirst = data => {
        return data.charAt(0).toUpperCase()+(data.toLowerCase()).slice(1)
    }

    const skewerCase = data => data.replaceAll(" ", "-")

    return {
        capitalizeFirst,
        skewerCase
    }
}



const task_1 = function () {

    const formatter = StringFormatter()

   console.log(formatter.capitalizeFirst("dorothy"))  //should print Dorothy
   console.log(formatter.skewerCase("blue box")) //should print blue-box
}


const Bank = function(){
    let money = 500

    const depositCash = (cash) => {
        money+=cash
    }
    const checkBalance = () =>{
        console.log("The cash in bank is "+ money)
    }

    return {
        deposit: depositCash,
        showBalance: checkBalance
    }
}
const task_2= function(){
    const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
}

task_2()