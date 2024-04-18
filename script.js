var hobbies = ["painting", "music", "writing", "gaming", "cooking", "gardening"];
//console.log(hobbies.length);
hobbies.push("shopping");
//console.log(hobbies[2]);
hobbies.pop(6);
//console.log(hobbies);
hobbies.splice(2, 0, "reading", "hiking");
//console.log(hobbies);
hobbies.shift();
//console.log(hobbies);
hobbies.unshift("photography");
//console.log(hobbies);

var goals =["Move somewhere new", "Finish school", "Be healthier"];
var allTheThings = hobbies.concat(goals);
//console.log(allTheThings);
//console.log(allTheThings.indexOf("reading"));
allTheThings.splice(2, 1);
//console.log(allTheThings);

var plans = allTheThings.map(function(item){
    return `I can't wait to start ${item}`
});
//console.log(plans);