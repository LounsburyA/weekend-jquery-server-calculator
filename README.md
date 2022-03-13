# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description


This objective of this project was to create a calculator.  The user interface needed to have two inputs where the users can input values.  It also needed to have operational elements so users can select the type of mathematical equation for the calculator to perform. The calculator also needed to clear inputs and perform the math upon press of the the equal button. When the equals button is pressed the solution will appear on the interface as well as a history of mathematical operations performed.

The mathematical operations needed to be done on the server-side, and this would be the most difficult challenge to overcome.  Starting with building out the interface in html with appropriate inputs, mathematical operants, clear and equals buttons. Then locations for the mathematical operation history and results. On the server two arrays were created one to store the the mathematical results and one to store the mathematical equations. A function was written to perform the math and push both the results as well as the equations to the appropriate arrays.  Three routes were created one to receive the data from the user, one to send back the results, and one to send back the history of the equation performed. On the client side the the input information needed to be gathered and sent to the server in order for the math to be completed.  Three routes were created. The first to send the user input information to the server upon click of the equals button, another to get back the result of the math equation, another to get back the history of the equation performed. A function was written to post the equation result to the dom, another was written to post the equation history to the dom. These functions were called in the appropriate get functions. A function was written to gather the mathematical operator clicked by the user. A function was created to clear the inputs for the user upon click. 


