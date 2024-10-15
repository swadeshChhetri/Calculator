let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

  /* Array.from() --> This method converts the buttons collection into a true array,
   which allows us to use array methods like - map, filter, forEach, etc., on arr.&*/


arr.forEach(button => {
/*forEach is a method that executes a provided function once for each element in an array. */
    button.addEventListener('click', (e) =>{
       
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string; 
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
        //  string.substring(startIndex, endIndex);

            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
