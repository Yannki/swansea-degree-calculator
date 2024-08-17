console.log("Loaded");

function calculateFinalDegree() {
    var Y2 = [
        [getValue("module1Y2"),getValue("credit1Y2")],
        [getValue("module2Y2"),getValue("credit2Y2")],
        [getValue("module3Y2"),getValue("credit3Y2")],
        [getValue("module4Y2"),getValue("credit4Y2")],
        [getValue("module5Y2"),getValue("credit5Y2")],
        [getValue("module6Y2"),getValue("credit6Y2")],
        [getValue("module7Y2"),getValue("credit7Y2")],
        [getValue("module8Y2"),getValue("credit8Y2")],
        [getValue("module9Y2"),getValue("credit9Y2")],
        [getValue("module10Y2"),getValue("credit10Y2")]
    ];

    Y2.sort((a,b) => b[0] - a[0]);

    var Y3 = [
        [getValue("module1Y3"),getValue("credit1Y3")],
        [getValue("module2Y3"),getValue("credit2Y3")],
        [getValue("module3Y3"),getValue("credit3Y3")],
        [getValue("module4Y3"),getValue("credit4Y3")],
        [getValue("module5Y3"),getValue("credit5Y3")],
        [getValue("module6Y3"),getValue("credit6Y3")],
        [getValue("module7Y3"),getValue("credit7Y3")],
        [getValue("module8Y3"),getValue("credit8Y3")],
        [getValue("module9Y3"),getValue("credit9Y3")],
        [getValue("module10Y3"),getValue("credit10Y3")]
    ];

    Y3.sort((a,b) => b[0] - a[0]);

    var Y4 = [
        [getValue("module1Y4"),getValue("credit1Y4")],
        [getValue("module2Y4"),getValue("credit2Y4")],
        [getValue("module3Y4"),getValue("credit3Y4")],
        [getValue("module4Y4"),getValue("credit4Y4")],
        [getValue("module5Y4"),getValue("credit5Y4")],
        [getValue("module6Y4"),getValue("credit6Y4")],
        [getValue("module7Y4"),getValue("credit7Y4")],
        [getValue("module8Y4"),getValue("credit8Y4")],
        [getValue("module9Y4"),getValue("credit9Y4")],
        [getValue("module10Y4"),getValue("credit10Y4")]
    ];

    Y4.sort((a,b) => b[0] - a[0]);

    var SGrade = getValue("gapGrade");

    var result = calculate3YearDegree(Y2,Y3);

    for (let i = 0; i < 4; i++){
        if (document.getElementById(i).checked) {
            if (i == 0) {
                result = calculate3YearDegree(Y2, Y3);
            } else if (i == 1) {
                result = calculate4YearDegreeIndustry(Y2, Y3, SGrade);
            } else if (i == 2) {
                result = calculate4YearDegreeMasters(Y2, Y3, Y4);
            } else {
                result = calculate5YearDegree(Y2, Y3, Y4, SGrade);
            }
            break;
        }
    }
   
    document.getElementById("result").innerHTML = "Your expected average is: " + result.toPrecision(4) + "%";
}

function getValue(idVal) {
    let val = document.getElementById(idVal).value;
    if (val >= 1) {
        return val;
    }
    return 0;
}

function calculate3YearDegree(Y2, Y3){
    var creditY2Sum = 0;
    var creditY3Sum = 0;
    var sum = 0;

    for (let i = 0; i < Y2.length; i++){
        if (Y2[i][1] != 0 && creditY2Sum < 40) {
            if (creditY2Sum + Y2[i][1] <= 40){
                creditY2Sum += Y2[i][1] * 2;
                sum += Y2[i][0] / 100 * Y2[i][1] * 2
            } else {
                let diff = 40 - Y2[i][1];
                sum += Y2[i][0] / 100 * (diff * 2 + (diff - Y2[i][1]));
                creditY2Sum += diff * 2 + (diff - Y2[i][1]);
            }
        } else if (Y2[i][1] != 0) {
            creditY2Sum += Y2[i][1] * 1;
            sum += Y2[i][0] / 100 * Y2[i][1] * 1
        }
    }

    for (let i = 0; i < Y3.length; i++){
        if (Y3[i][1] != 0 && creditY3Sum < 80) {
            if (creditY3Sum + Y3[i][1] <= 80){
                creditY3Sum += Y3[i][1] * 3;
                sum += Y3[i][0] / 100 * Y3[i][1] * 3
            } else {
                let diff = 80 - Y3[i][1];
                sum += Y3[i][0] / 100 * (diff * 3 + (diff - Y3[i][1]) * 2);
                creditY3Sum += diff * 3 + (diff - Y3[i][1]) * 2;
            }
            
        } else if (Y3[i][1] != 0) {
            creditY3Sum += Y3[i][1] * 2;
            sum += Y3[i][0] / 100 * Y3[i][1] * 2
        }
    }


    return result = sum / (creditY2Sum + creditY3Sum) * 100;
}

function calculate4YearDegreeIndustry(Y2, Y3, SGrade){
    var creditY2Sum = 0;
    var creditY3Sum = 0;
    var sum = 0;

    for (let i = 0; i < Y2.length; i++){
        if (Y2[i][1] != 0 && creditY2Sum < 40) {
            if (creditY2Sum + Y2[i][1] <= 40){
                creditY2Sum += Y2[i][1] * 2;
                sum += Y2[i][0] / 100 * Y2[i][1] * 2
            } else {
                let diff = 40 - Y2[i][1];
                sum += Y2[i][0] / 100 * (diff * 2 + (diff - Y2[i][1]));
                creditY2Sum += diff * 2 + (diff - Y2[i][1]);
            }
        } else if (Y2[i][1] != 0) {
            creditY2Sum += Y2[i][1] * 1;
            sum += Y2[i][0] / 100 * Y2[i][1] * 1
        }
    }

    for (let i = 0; i < Y3.length; i++){
        if (Y3[i][1] != 0 && creditY3Sum < 80) {
            if (creditY3Sum + Y3[i][1] <= 80){
                creditY3Sum += Y3[i][1] * 3;
                sum += Y3[i][0] / 100 * Y3[i][1] * 3
            } else {
                let diff = 80 - Y3[i][1];
                sum += Y3[i][0] / 100 * (diff * 3 + (diff - Y3[i][1]) * 2);
                creditY3Sum += diff * 3 + (diff - Y3[i][1]) * 2;
            }
            
        } else if (Y3[i][1] != 0) {
            creditY3Sum += Y3[i][1] * 2;
            sum += Y3[i][0] / 100 * Y3[i][1] * 2
        }
    }


    return result = (sum + SGrade) / (creditY2Sum + creditY3Sum + 100) * 100;
}

function calculate4YearDegreeMasters(Y2, Y3, Y4){
    var creditY2Sum = 0;
    var creditY3Sum = 0;
    var creditY4Sum = 0;
    var sum = 0;

    for (let i = 0; i < Y2.length; i++){
        if (Y2[i][1] != 0 && creditY2Sum < 40) {
            if (creditY2Sum + Y2[i][1] <= 40){
                creditY2Sum += Y2[i][1] * 2;
                sum += Y2[i][0] / 100 * Y2[i][1] * 2
            } else {
                let diff = 40 - Y2[i][1];
                sum += Y2[i][0] / 100 * (diff * 2 + (diff - Y2[i][1]));
                creditY2Sum += diff * 2 + (diff - Y2[i][1]);
            }
        } else if (Y2[i][1] != 0) {
            creditY2Sum += Y2[i][1] * 1;
            sum += Y2[i][0] / 100 * Y2[i][1] * 1
        }
    }

    for (let i = 0; i < Y3.length; i++){
        if (Y3[i][1] != 0 && creditY3Sum < 60) {
            if (creditY3Sum + Y3[i][1] <= 60){
                creditY3Sum += Y3[i][1] * 3;
                sum += Y3[i][0] / 100 * Y3[i][1] * 3
            } else {
                let diff = 80 - Y3[i][1];
                sum += Y3[i][0] / 100 * (diff * 3 + (diff - Y3[i][1]) * 2);
                creditY3Sum += diff * 3 + (diff - Y3[i][1]) * 2;
            }
            
        } else if (Y3[i][1] != 0) {
            creditY3Sum += Y3[i][1] * 2;
            sum += Y3[i][0] / 100 * Y3[i][1] * 2
        }
    }

    for (let i = 0; i < Y4.length; i++){
        if (Y3[i][1] != 0 && creditY3Sum < 90) {
            if (creditY4Sum + Y4[i][1] <= 90){
                creditY4Sum += Y4[i][1] * 4;
                sum += Y4[i][0] / 100 * Y4[i][1] * 4
            } else {
                let diff = 90 - Y4[i][1];
                sum += Y4[i][0] / 100 * (diff * 4 + (diff - Y4[i][1]) * 3);
                creditY4Sum += diff * 4 + (diff - Y4[i][1]) * 3;
            }
            
        } else if (Y4[i][1] != 0) {
            creditY4Sum += Y4[i][1] * 3;
            sum += Y4[i][0] / 100 * Y4[i][1] * 3
        }
    }


    return result = sum / (creditY2Sum + creditY3Sum + creditY4Sum) * 100;
}

function calculate5YearDegree(Y2, Y3, Y4, SGrade){
    var creditY2Sum = 0;
    var creditY3Sum = 0;
    var creditY4Sum = 0;
    var sum = 0;

    for (let i = 0; i < Y2.length; i++){
        if (Y2[i][1] != 0 && creditY2Sum < 40) {
            if (creditY2Sum + Y2[i][1] <= 40){
                creditY2Sum += Y2[i][1] * 2;
                sum += Y2[i][0] / 100 * Y2[i][1] * 2
            } else {
                let diff = 40 - Y2[i][1];
                sum += Y2[i][0] / 100 * (diff * 2 + (diff - Y2[i][1]));
                creditY2Sum += diff * 2 + (diff - Y2[i][1]);
            }
        } else if (Y2[i][1] != 0) {
            creditY2Sum += Y2[i][1] * 1;
            sum += Y2[i][0] / 100 * Y2[i][1] * 1
        }
    }

    for (let i = 0; i < Y3.length; i++){
        if (Y3[i][1] != 0 && creditY3Sum < 60) {
            if (creditY3Sum + Y3[i][1] <= 60){
                creditY3Sum += Y3[i][1] * 3;
                sum += Y3[i][0] / 100 * Y3[i][1] * 3
            } else {
                let diff = 80 - Y3[i][1];
                sum += Y3[i][0] / 100 * (diff * 3 + (diff - Y3[i][1]) * 2);
                creditY3Sum += diff * 3 + (diff - Y3[i][1]) * 2;
            }
            
        } else if (Y3[i][1] != 0) {
            creditY3Sum += Y3[i][1] * 2;
            sum += Y3[i][0] / 100 * Y3[i][1] * 2
        }
    }

    for (let i = 0; i < Y4.length; i++){
        if (Y3[i][1] != 0 && creditY3Sum < 90) {
            if (creditY4Sum + Y4[i][1] <= 90){
                creditY4Sum += Y4[i][1] * 4;
                sum += Y4[i][0] / 100 * Y4[i][1] * 4
            } else {
                let diff = 90 - Y4[i][1];
                sum += Y4[i][0] / 100 * (diff * 4 + (diff - Y4[i][1]) * 3);
                creditY4Sum += diff * 4 + (diff - Y4[i][1]) * 3;
            }
            
        } else if (Y4[i][1] != 0) {
            creditY4Sum += Y4[i][1] * 3;
            sum += Y4[i][0] / 100 * Y4[i][1] * 3
        }
    }


    return result = (sum + SGrade) / (creditY2Sum + creditY3Sum + creditY4Sum + 100) * 100;
}
