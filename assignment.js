//Problem number 1: Convert from Feet to Mile.

function feetToMile(miles) {
    var feet = miles * 0.000189394; //1 ft=0.000189394 Miles
    return feet;
}

var size1 = feetToMile(180);
    console.log(size1);

var size2 = feetToMile(369);
    console.log(size2);

var size3 = feetToMile(690);
    console.log(size3);



//Problem number 2: Calculate amount of woods for you chair, table and bed.

function woodCalculator(numberOfChair, numberOfTable, numberOfBed) {
    var totalWood = numberOfChair * 1 + numberOfTable * 3 + numberOfBed * 5;
    return totalWood;
}

var customer1 = woodCalculator(10, 20, 30);
    console.log(customer1);

var customer2 = woodCalculator(23, 46, 89);
    console.log(customer2);

var customer3 = woodCalculator(45, 89, 12);
    console.log(customer3);



//Problem number 3: Calculate amount of bricks you need for a particular floor.

function brickCalculator(floor) {
    let floorDataType = Number.isInteger(floor);
    if (floorDataType == true) {
        if (floor > 0) {
            if (floor <= 10) {
                let totalFeets = floor * 15;
                let totalBricks = totalFeets * 1000;
                    return totalBricks + " Bricks";
            } 
            else if (floor > 10 && floor <= 20) {
                let floorFeets12 = floor - 10;
                let floorFeets15 = floor - floorFeets12;
                let totalFeets = floorFeets15 * 15 + floorFeets12 * 12;
                let totalBricks = totalFeets * 1000;
                    return totalBricks;
            } 
            else {
                let floorFeets10 = floor - 20;
                let totalFeets = 10 * 15 + 10 * 12 + floorFeets10 * 10;
                let totalBricks = totalFeets * 1000;
                    return totalBricks;
            }
        } 
        else {
            return "Building floor can not be 0 Or Negative";
        }
    }
    else {
        return "The input should be integer";
    }
}

    let floor = 21;
    let totalBricks = brickCalculator(floor);
        console.log(totalBricks);




//Problem Number 3: Finding out Tiny friend

var friendsName = ["Arun Jyoti","Babu","Nitai","Neel","Dada","Vaidi","Best Friend","Best Son","Bapon","Angkon",
];

function tinyFriend(friendsName){
    var sm = friendsName.length;
    var smallest;
        for (var i = 0; i < friendsName.length; i++){
            if (friendsName[i].length < sm) {
                sm = friendsName[i].length;
                smallest = friendsName[i];
            }
        }
    return smallest;
}
    var Result = tinyFriend(friendsName);
        console.log(Result);