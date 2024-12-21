let buttons = document.querySelectorAll("button");
let input=document.getElementById("place");

let string="";
let arr =Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(ele)=>{
        if(ele.target.innerHTML=== '=')
        {
            try {
                string = eval(string); // Evaluate the expression
                input.value = string;
            } catch (error) {
                input.value = "Error"; // Handle invalid input gracefully
                string = ""; // Reset the string
            }
        }
        else if(ele.target.innerHTML=== 'DEL')
        {
            string = string.slice(0, -1);
            input.value = string;
        }
        else if(ele.target.innerHTML=== 'e')
        {
            
            string+=2.73;
            input.value = string;
        }
        
        else if(ele.target.innerHTML=== 'AC')
        {
            string="";
            input.value=null;
        }
        else
        {
            string+=ele.target.innerHTML;
            input.value = string;
        }
      
    })
    
});