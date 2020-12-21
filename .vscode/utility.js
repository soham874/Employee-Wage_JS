var IS_FULL_DAY = 8
var IS_HALF_DAY = 4

var DAILY_WAGE
var MAX_WORK_DAYS
var MAX_WORK_HOURS

var totalWageStore = []

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

        let workwage = this.DAILY_WAGE * this.isPresentorAbsent()
        return workwage
    }

    monthWageCalculate() {

        let workedHours = 0
        let workedDays = 1
        let totalwage = 0

        while (workedHours < this.MAX_WORK_HOURS && workedDays <= this.MAX_WORK_DAYS) {
            let s = `For day ${workedDays}, employee wage is `
            let wage = this.calculateEmpWage()
            console.log(s + wage)
            workedDays++
            workedHours += wage / this.DAILY_WAGE
            totalwage += wage
        }

        totalWageStore.push(totalwage)
        console.log("Total worked hours is " + workedHours)
        console.log("Total wage earned is Rs." + totalwage)

    }

    companyWageCalculate() {

        var companyName = ["TCS", "Dell", "HP", "Lenovo", "Wipro"]
        var dailyWage = [20, 50, 30, 45, 50]
        var maxHours = [100, 150, 200, 175, 180]
        var maxDays = [20, 15, 25, 18, 23]

        for (var i = 0; i <= 4; i++) {
            console.log("~~~~~~~~~~~~~~~~~~Calculating for company " + companyName[i] + " ~~~~~~~~~~~~~")
            this.DAILY_WAGE = dailyWage[i]
            this.MAX_WORK_DAYS = maxDays[i]
            this.MAX_WORK_HOURS = maxHours[i]

            this.monthWageCalculate()
        }


    }
}

module.exports = new Utility();