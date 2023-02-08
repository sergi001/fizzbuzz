//for loop :
//Set counter to 1
//Break whhen counter rreaches 20
//Increment coounter by 1
for (let i = 1; i <=20;i++){
    if (i%15 ===0){
        console.log('FizzBuzz');
    }else if (i%3 ===0){ 
        console.log('Fizz');
    }else if (i%5 ===0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}