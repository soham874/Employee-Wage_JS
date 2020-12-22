const { Utility } = require('./utility.js')
let util=require('./utility.js')

class companyEmpWage{
    
    empWageBuilder(){
        var companyName = ["TCS", "Dell", "HP", "Lenovo", "Wipro"]
        var dailyWage = [20, 50, 30, 45, 50]
        var maxHours = [100, 150, 200, 175, 180]
        var maxDays = [20, 15, 25, 18, 23]

        for (var i = 0; i < companyName.length ; i++) 
           util.companyWageCalculate(companyName[i], dailyWage[i], maxHours[i], maxDays[i]);

        
    }
        
}

module.exports = new companyEmpWage();