class Utility {
    isPresentorAbsent() {

        let IS_FULL_DAY = 8
        let IS_HALF_DAY = 4

        let attendance = Math.floor(Math.random() * 10 % 3)
        if (attendance === 0)
            console.log("Employee is absent.")
        else if (attendance === 1) {
            attendance = IS_HALF_DAY
            console.log("Employee is present half day.")
        }
        else {
            attendance = IS_FULL_DAY
            console.log("Employee is present full day.")
        }


        return attendance
    }

    calculateEmpWage() {
        let DAILY_WAGE = 20
        let workhours = DAILY_WAGE * this.isPresentorAbsent()
        console.log("Employee wage is " + workhours)
    }
}

module.exports = new Utility();