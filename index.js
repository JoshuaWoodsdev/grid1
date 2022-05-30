//When the user presses the key, your code will randomly place two different ships in two separate locations on the board. Each ship is only 1 unit long (In the real game ships are 2+ in length).
var readlineSync = require('readline-sync');

//var

//array
  //(Array grid goes into a class or function)

  //classes=> objects
  //create a object for the ship(then a function the recreats them)
   // will (...spread) these randomllly into a array 

   //player 

//functions
//Step One place random ships
  // const placeShip() => "
    //function that places random ships on the grids;

//Step two check if object in array
  // const shipCheck () =>"
    // a function will create a check, the array IF the user input matches...if is does not they will have to try agian and print some text to try agian...but if it works it says  "Hit. You have sunk a battleship.
    //this also has some sort of counter on the ship object?
    //add a check if user had picked a spot and say try again?"You have already picked this location. Miss!" maybe a loop?
//Step Three
  //have a function that when COUNTER reaches 0 so a IF  shipOBject is less than 1 then {console prompt "You have destroyed all battleships. Would you like to play again? Y/N"}
  //if user puts restart the game in no break or ends the game
//logic


//Step One
console.log('Press any key to start the game');
var promt1 = readlineSync.prompt('');
// Wait for user's response. Should create a random area of map
//placeShip();

//?Need a if statment 
   //if ship is == || === to userinput console.log("Hit. You have sunk a battleship. 1 ship remaining.") else console.log(not valid location)
var userName = readlineSync.question('Enter a location to strike ie 'A2');
  //{limit: (NAME OF THE BOARD), //limit will check the array if its a valid location
  //limitMessage: "not a valid location"
 // }
    
 //(COUNTER);
   
