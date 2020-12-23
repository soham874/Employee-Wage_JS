var IS_FULL_DAY = 8
var IS_HALF_DAY = 4

var totalWageStore = []
var comNames = []

class Utility {

    //returns working hours for a day
    isPresentorAbsent = () => {


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

    //returns wage for a day
    calculateEmpWage = () => {

        let workwage = this.DAILY_WAGE * this.isPresentorAbsent()
        return workwage
    }

    //returns daily, total wages and working hours for each company
    monthWageCalculate = () => {

        var dailyWageStore = []
        let workedHours = 0
        let workedDays = 1
        let totalwage = 0

        while (workedHours < this.MAX_WORK_HOURS && workedDays <= this.MAX_WORK_DAYS) {
            let s = `For day ${workedDays}, employee wage is `
            let wage = this.calculateEmpWage()
            dailyWageStore.push(wage)
            console.log(s + wage)
            workedDays++
            workedHours += wage / this.DAILY_WAGE
            totalwage += wage
        }

        totalWageStore.push(totalwage, dailyWageStore)
        console.log("Total worked hours is " + workedHours)
        console.log("Total wage earned is Rs." + totalwage)

    }

    //makes use of all above functions to store and evaluate wages for a company
    companyWageCalculate = (compName, dailWag, maximumHour, maximumDay) => {
        comNames.push(compName)
        this.DAILY_WAGE = dailWag
        this.MAX_WORK_DAYS = maximumDay
        this.MAX_WORK_HOURS = maximumHour
        console.log("~~~~~~~~~~~~~~~~~~Calculating for company " + compName + " ~~~~~~~~~~~~~")
        this.monthWageCalculate()

    }

    //searchs for records of a company
    searchName = (input) => {

        if (comNames.includes(input)) {

            let i = 0
            while (comNames[i].localeCompare(input) != 0 && i < comNames.length)
                i++;
            
            console.log("Total wage earned by wage of this comapany is " + totalWageStore[2 * i])
            console.log("Daily wages earned in this company are " + totalWageStore[2 * i + 1])

            return true
        }

        console.log("Sorry this company record doesnot exist.")
    }
}

module.exports = new Utility();