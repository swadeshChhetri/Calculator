/* How do you Create a Calculator? */
/*
![HTML]
*Step1 : Took a first container to Include Calculator;
*Step2 : Took a Calculator Container for includes all Parts;
*Step3 : Took a Input BOx for Displaying Values;
*Step4 : Took Buttons & Operators

![CSS]
*Step1 : body -> w-100%, h-100vh, and center Property;
*Step2 : input::placeholder{color: white}; "::-> psudo element(affect on element)"

![JavaScript]
*Step1 : Select the InputBox and Buttons for adding functaionalities;
*Step2 : Convert all buttons element in an array for using array method;
*Step3 : apply forEach method on array -
                @1. add EventListener on each buttons and set the logic{
                  *if "=" buttion id clicked eval all the string;

                   string : when we clicked any buttoon in html it will be display with the help of "e.target.innerHTML and It will store string siquently with the help of (+=) operator and I set it in display section with the help of input.value;" 

                   *if "AC" button is Clicked then string =""(blank)& set it in display"

                   *if "DEL" button is clicked then will be performed substring(0, string.length-1); & Set it in display ;

                   *else store clicked butoons in string and display ; 
                } 

*/