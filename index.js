const reader = require('readline-sync');

let userChoice;
let computerChoice;
const names = [];


function sortArray (array) {
    const sortNumer = Number.parseInt(Math.random() * array.length);

    return array[sortNumer];
}




(
    function (arrayNames) {
        let option = true;
        let answer;

        const isEmptyAnswer = (resp) => {
            if (resp === "") {
                return true;


            } else {
                return false;


            }


        }


        do {
            answer = reader.question ("Type a name for sort: ");
            
            if ( isEmptyAnswer(answer) ) {
                console.error ("ERROR! void answer");

        
            }else {
                arrayNames.push(answer);



            }
            console.log ("----------------------------------------------------");

            
            
            console.log ("Do you want to add another? ");
            console.log ("| Type 1 for YES. ");
            console.log ("| Type 2 for NO. ");
            
            switch ( reader.question ("option: ") ) {
                case "1":
                    option = true;
                    console.clear();
                    break;

                    
                case "2":
                    option = false;
                    console.clear();
                    break;

            }


            
        } while (option);  

        console.clear();
        return arrayNames;

    }

)(names)



console.log ("The names are:");
console.table (names);

console.log ("--->  How name I'm thinking? ");

computerChoice = sortArray (names);
userChoice = reader.question ("What is the name of computer thinking? ");


if (computerChoice === userChoice) {
    console.log ("Congratulation! you win!");


} else {
    console.log ("Ops.. I was thinking in " + computerChoice);


}

