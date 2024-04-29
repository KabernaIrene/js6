//Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок і повертає новий рядок, 
//у якому кожен символ повторюється двічі hello ⇒ hheelllloo.


const myStr = prompt('Write your message, please')

function doubleLetter(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        newStr += str[i].repeat(2)
    }
    console.log(newStr);
}

doubleLetter(myStr)



//Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число, 
//що є довгим рядком, який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно, 
//четвертим параметром є буремний «прапор», чи додавати символи зліва або справа(за замовчуванням). 
//Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін. 
//Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.



const longStr = prompt('Write your string, please')
const strLength = +prompt('write length, what you need, please')
const strsymbol = prompt('write a symbol, please')
const flag = prompt("What side?")




function padString(str, length, symbol, toLeft = 'left') {
        let padStr = ''
        
    if (str.length < length){

        
        if(toLeft == 'right') {
            padStr = str.padEnd(length, symbol)
            console.log(padStr)
        } else
       {
            padStr = str.padStart(length, symbol)
            console.log(padStr)
        }
        
    } else {console.log(str.length);
        console.log(str);}
}

padString(longStr, strLength, strsymbol, flag);




//Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату camelCase.


const strCase = prompt('Write a message, please')


function camelCase(str, separator){
    let newStr = str.split(separator)

    let newStrArr = ''
    for(let i = 1; i<newStr.length; i++){
        
        let strArr = newStr[i][0];
        newStrArr += strArr.toUpperCase() + newStr[i].slice(1)

    }
    newStr = newStr[0] += newStrArr

    console.log(newStr)
}

camelCase(strCase,' ');