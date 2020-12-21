class Utility{
    isPresentorAbsent(){
        
        let IS_FULL_DAY = 8
        
        let attendance = Math.floor(Math.random() * 10 % 2)
        if (attendance === 0)
            console.log("Employee is absent.")
        else {
            attendance = IS_FULL_DAY
            console.log("Employee is present.")
        }
            
        
        return attendance
    }

    calculateEmpWage(){
        let DAILY_WAGE = 20
        let workhours = DAILY_WAGE * this.isPresentorAbsent()
        console.log("Employee wage is " + workhours)
    }
}

module.exports = new Utility();