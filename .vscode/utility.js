class Utility{
    isPresentorAbsent(){
    
        let attendance = Math.floor(Math.random() * 10 % 2)
        if (attendance === 0)
            console.log("Employee is absent.")
        else
            console.log("Employee is present.")
    
    }
}

module.exports = new Utility();