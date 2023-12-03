const array = ['Welcome to Programming', 'JavaScript is Awesome', 'Today is a sunny day!', 'Time for a Coffe!', 'Time for sleep!'];
const array2 = ['Pizza', 'Souvlakia', 'Pita Gyros', 'Pasta', 'Stake'];
const array3 = ['AEK', 'Olympiakos', 'Panathinaikos', 'PAOK', 'Aris', 'Real Madrid'];

function chooseArray(){
    return Math.floor(1 + Math.random() * 3);
}

function chooseArrayNumber(array){
    return Math.floor(Math.random() * array.length);
}

function chooseArray2Number(array2){
    return Math.floor(Math.random() * array2.length);
}

function chooseArray3Number(array3){
    return Math.floor(Math.random() * array3.length);
}

function messages(array, array2, array3){
    let choosearray = chooseArray();
    let array1Number = chooseArrayNumber(array);
    let array2Number = chooseArray2Number(array2);
    let array3Number = chooseArray3Number(array3);

    if(choosearray === 1){
        switch(array1Number){
            case 0:
                console.log(`${array[0]} with JavaScript!`);
                break;
            case 1:
                console.log(`${array[1]} enjoy your Journey!`);
                break;
            case 2:
                console.log(`${array[2]} Time for Running!`);
                break;
            case 3:
                console.log(`I finish my job ${array[3]}`);
                break;
            case 4:
                console.log(`I am out of power. ${array[4]}`);
                break;
            default:
                console.log('We have an error.');      
        }
    }
    else if(choosearray === 2){
        switch(array2Number){
            case 0:
                console.log(`My favorite food is ${array2[0]}`);
                break;
            case 1:
                console.log(`My favorite food is ${array2[1]}`);
                break;
            case 2:
                console.log(`My favorite food is ${array2[2]}`);
                break;
            case 3:
                console.log(`My favorite food is ${array2[3]}`);
                break;
            case 4:
                console.log(`My favorite food is ${array2[4]}`);
                break;
            default:
                console.log('We have an error.');   
        }
    }
    else if(choosearray === 3){
        switch(array3Number){
            case 0:
                console.log(`My favorite team is ${array3[0]}`);
                break;
            case 1:
                console.log(`My favorite team is ${array3[1]}`);
                break;
            case 2:
                console.log(`My favorite team is ${array3[2]}`);
                break;
            case 3:
                console.log(`My favorite team is ${array3[3]}`);
                break;
            case 4:
                console.log(`My favorite team is ${array3[4]}`);
                break;
            case 5:
                console.log(`My favorite team is ${array3[5]}`);
                break;
            default:
                console.log('We have an error.'); 
        }
    }
}

messages(array, array2, array3);