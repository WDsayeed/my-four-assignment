// Problem 1: Let’s play a mind game

function mindGame(number){

        if(typeof number !== 'number'){
                return 'Input should be number!';
        }else if( number < 0){
                return 'Please input any positive number!'
        }

        let returnNumber = 0;

        returnNumber = number * 3;

        returnNumber = returnNumber + 10;

        returnNumber = returnNumber / 2;

        returnNumber = returnNumber - 5;

        return returnNumber;
}

// Problem 2: Finding even or odd

function evenOdd(str){
        
        if(typeof str !== 'string'){
                return 'Input should be string !';
        }

        if( str.length % 2 === 0){
                return 'even';
        }
        return 'odd';
}
const inputStr = 'Batch7';
const inputPerameter = evenOdd(inputStr);


// Problem 3: Is Less or Greater than seven

function isLGSeven(number){
        let subtractNum = number - 7;

        if(typeof number !== 'number'){
                return 'Input should be number!'
        }
        else if(subtractNum < 7 ){
               return subtractNum;
        }
        else if( subtractNum >= 7){
                let multiplicateNum = number * 2;
                return multiplicateNum ; 
        }

} 


// Problem 4: Finding Bad data

const ages = [ -4, -9, -5, -33, -55 ];

function findingBadData(numbers){
        
        let count = 0;
        for(let i = 0; i < numbers.length; i++){
                let number = numbers[i];
                if(number < 0){
                        count++;
                }
        }
        return count;
}
const countBadData = findingBadData(ages)
// console.log(countBadData)

// Problem 5: Convert your gems into diamond

function gemsToDiamond(num1, num2, num3){

        const firstFrndGemsPow = 21;
        const secondFrndGemsPow = 32;
        const thirdFrndGemsPow = 43;

        const firstfrndDiamond = num1 * firstFrndGemsPow;
        const secondfrndDiamond = num2 * secondFrndGemsPow;
        const thirdfrndDiamond = num3 * thirdFrndGemsPow;
        const totalDiamond = firstfrndDiamond + secondfrndDiamond + thirdfrndDiamond;

        if(typeof num1 !== 'number'|| typeof num2 !== 'number'|| typeof num3 !== 'number'){
                return 'please provide all valid numbers!';
                }
       
        else if( totalDiamond > 2000){
                let restDiamond = totalDiamond - 2000;
                return restDiamond;
        }
        return totalDiamond;
}


