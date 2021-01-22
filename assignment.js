//  1 no problem solution
 
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000
    return meter;
}
var output = kilometerToMeter(10);
console.log(output);

//  2 no problem solution

function budgetCalculator(watch, mobile, laptop){
    var first = watch * 50;
    var second = mobile * 100;
    var third = laptop * 500;
    var total = first + second + third;
    return total; 
}
var totalAmount = budgetCalculator(2, 3, 4);
console.log(totalAmount);

//  3 no problem solution

function hotelCost(days) {
   var cost = 0;
   if (days <= 10) {
       cost = days * 100;
   }
   else if (days <= 20) {
       var firstTenDays = 10 * 100;
       var remaining = days - 10;
       var secondTenDays = remaining * 80;
       cost = first10Days + second10Days;
   }
   else {
       var firstTenDays = 10 * 100;
       var secondTenDays = 10 * 80;
       var remaining = days - 20;
       var thirdTenDays = remaining * 50;
       cost = firstTenDays + secondTenDays + thirdTenDays;
   }
   return cost;
}
var totalCost = hotelCost(25);
console.log(totalCost);

// 4 no problem solution

function megaFriend(friend){
    var mega = friend[0];
    for(var i = 0; i < friend.length; i++){
        var element = friend[i];
        if(element.length > mega.length){
            mega = element;
        }
    }
    return mega;
}
var result = megaFriend(['sajib', 'sifat', 'simul', 'alamin']);
console.log(result);


