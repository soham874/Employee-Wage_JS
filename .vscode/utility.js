class Utility {
    isPresentorAbsent() {

        let IS_FULL_DAY = 8
        let IS_HALF_DAY = 4

        let attendance = Math.floor(Math.random() * 10 % 3)
        switch(attendance){
            case 0:
                attendance = 0
                break
            case 1:
                attendance = IS_HALF_DAY
                break
            case 2:
                attendance = IS_FULL_DAY
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