var IS_FULL_DAY = 8
var IS_HALF_DAY = 4
var DAILY_WAGE = 20

var MAX_WORK_DAYS = 20
var MAX_WORK_HOURS = 100


class Utility {
    isPresentorAbsent() {

        
        let attendance = Math.floor(Math.random() * 10 % 3)
        switch (attendance) {
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
        
        let workwage = DAILY_WAGE * this.isPresentorAbsent()
        return workwage
    }

    monthWageCalculate() {

        let workedHours = 0
        let workedDays = 1
        let totalwage = 0

        while(workedHours < MAX_WORK_HOURS && workedDays <= MAX_WORK_DAYS){
            let s = `For day ${workedDays}, employee wage is `
            let wage = this.calculateEmpWage()
            console.log(s+wage)
            workedDays++
            workedHours+=wage/DAILY_WAGE
            totalwage+=wage
        }

        console.log("Total worked hours is "+workedHours)
        console.log("Total wage earned is Rs."+totalwage)

    }
}

module.exports = new Utility();