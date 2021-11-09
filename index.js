

for(var i = 0; i < 10; i++){
    console.log(i)
}

for(var i = 9; i > -1; i--){
    console.log(i)
}
var fruits =  ["banana", "orange", "apple", "kiwi"]
    console.log(fruits)

    var numberArray = [];

    for(var i = 1; i <= 9; i++){
        numberArray.push(i);
    }
    
    console.log(numberArray); 


    for(var i = 0; i < 101; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }

    var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
    function every_other(array){
    var temporaryArray = []
    for (var i = 0; i < array.length; i += 2){ 
        temporaryArray.push(array[i])
    }
    return temporaryArray.join(", ")
}
console.log(every_other(fruit))

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  var nameArray = [];
  for(var i = 0; i < peopleArray.length; i++){
      nameArray.push(peopleArray[i].name);
  }     console.log(nameArray); 

  var occArray = [];
for (var i = 0; i < peopleArray.length; i++){
    occArray.push(peopleArray[i].occupation);}
    console.log(occArray)

    function every_other(array){
        var temporaryArray = []
        for (var i = 0; i < array.length; i += 2){ 
            temporaryArray.push(array[i])
        }
        return temporaryArray.join(", ")
    }
    console.log(every_other(nameArray))

    function every_other(array){
        var temporaryArray = []
        for (var i = 1; i < array.length; i += 2){ 
            temporaryArray.push(array[i])
        }
        return temporaryArray.join(", ")
    }
    console.log(every_other(occArray))

    var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] ); 
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( 0 );
    }
}

console.log( grid );

var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] ); 
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( i );
    }
}

console.log( grid );

var grid = [];

for( var i = 0; i < 3; i++ ) {
    grid.push( [] ); 
    for( var j = 0; j < 3; j++ ) {
        grid[i].push( j );
    }
}

console.log( grid );

var grid = [[0, 1, 2], [0, 1, 2], [0, 1, 2]];

for( var i = 0; i < grid.length; i++ ) {
    
    for( var j = 0; j < 3; j++ ) {
        grid[i][j] = "x";
    }
}

console.log( grid )