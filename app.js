let coding = document.querySelector("#coding");

let concept = document.querySelector("#concept");
let codingQuestion = [
  "Create a web app which would take two inputs. It would also have 4 buttons: +, -, x /. Based on the button clicked perform the operation on the two inputs. You can do this in React or vanillaJS based on your choice. Your time starts now.",
  "Create a web app where I can input a text. Now create two buttons + and -. On clicking + increase the fontSize by 2px and vice versa.",
  "Create a web app where I can input a text. Now, create three buttons h1, h2, h3. When I click on any of the button, the text should become h1, h2, or h3.",
  "Create a web app where I can input a text. Now, create three buttons: red, green, blue. Clicking on the button should change the text color.",
  "Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?",
  "Create a web app with a button loded. Show a text loading... on a web app. However, hide it if I click on the button loaded.",
  "Here's an API. Create a web app to call this API with your full name and print the response. This could be extended where we ask you to do something with the response. Like add a text, or capitalise etc. https://otpgenerator.ishanjirety.repl.co/get-otp?name=harshit",
  "Here' an API. It will give an error. Write a web app, call this API and read the error message. Show user the error message.",
  "Here's an API, it can give two errors. Either 404, or 401. If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.",
  " Open your Github repo. Make a small change. And create a PR. Explain what you understand by Git, what's PR etc.",
  "Create a password checker web app. If password is lesser than 10 characters then show an error to user otherwise show success. Someone can ask to make the submit button disabled. Some can ask to make the input field green or red depending on input.",
  "Show me your portfolio. Okay, I like the button you have made. Can you re create the button without looking at source code? You're free to Google though.",
  "Create color variables in CSS. Two colors: primary and secondary. Now make your h1 of primary color, h2 of secondary color. Make two buttons, primary and secondary using the same color. Can you also set a font from Google Font?",
  "Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.",
  "Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power.",
  "Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar. Say if every character in name is worth 35 power points.",
  "You have to create a profit and loss calculator, in which you will make two input sections one will take current price and other one will take the cost price and to show result one will click on a button and a message will be shown, if there is loss then you just have to show a message with loss amount and similarly for profit",
  "Build a counter application and then some questions were asked related to the coding part. ",
  "The question Pranshu asked was that the user will not be able to add more characters after a certain limit has been reached (deleting characters is still possible). He asked Saksham to disable the button when the text area is empty and enable it when something is typed.",
  "Create a password checker web app. If password is less than 10 characters then show an error to user otherwise show success. ",

  " Create a web app and render your name using any heading or paragraph tag.It should have a border of 1px around it. Create 2 buttons, '5px' and '10px' below your name. The width of border should change to 5px and 10px by clicking respective buttons.",

  "Display the results of this API's response : [https://quick-access-api.desaihetav.repl.co/](https://quick-access-api.desaihetav.repl.co/) on the screen",

  " Take an input from the user in text format. Have 3 buttons with the names of Log ,Warn and Error.If user clicks on Log button then the text entered by user will be shown in black color.Similarly if the user clicks on Warn  and Error  buttons then the text entered by user will be shown on the screen in the yellow and red colors respectively. ",

  "Create a web app, where I input my name, and then I input a password.If the password contains the input name in it, show an error message Password can't have name",

  "Create an Input Element, which shows a display message according to the Input text with the click of a button. If you type - Tanvi - then show, She is the best CEO ever!Tanay - then show, He is our FUNNY mentor!Swapnil - then show, He helps us CONQUER jobs!Akanksha - then show, She is our CHEERFUL Interviewer!",

  "Create 2 buttons with text YJHD and ZNMD. At the click of a button, call the given API with the query as same as the button text, and display the message you get on the screen. Followup: Instead of using calling the fetch function twice in both events(clicking of buttons), enclose it in a different function so that it can be used accordingly in both areas.The trick in the follow-up: addEventListerner methods do not require any additional parameter to be attached in the function that is passed as 2nd parameter otherwise that function gets called there itself on the spot instead of executing the function on the event. Solved by using arrow Function API -[https://mock-practice.prakhar10v.repl.co/bollywood?name=](https://mock-practice.prakhar10v.repl.co/bollywood?name=)Eg - Clicking on the button YJHD will make a call to[https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD](https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD)",

  "Here is an API - https://jsonplaceholder.typicode.com/todos. The response show the titles of all items on the screen",

  "Coding: Input a single-digit number and check whether the number is an Automorphic number or not. Render output on the page.An automorphic number is a number whose square ends in the same digits as the number itself.For example,52 = 25, here 25 ends with ‘5’. Display :5 is an Automorphic Number on the screen62 = 36, here 36 ends with ‘6’So 5 and 6 are automorphic numbers7 isn't an automorphic number because 7**2=49.Display :7 is not an Automorphic Number on the screen",

  "Coding:  Create a password checker web application having 2 input sections that takes the password. If the value in both sections are equal then show the message Success on the screen and if not equal then show Passwords Mismatched on the click of a button",

  "Coding: Create a list of 3 objects that has 2 attributes name of the task and completed which is a boolean value true or false. Display those tasks which are completed or which have attributes as completed:true on the click of a button.",

  " Create a stock profit or loss calculator. Take name of stock and buying price of the stock as input from the user. Get the current price of the stock from the following API – https://stock-api.desaihetav.repl.co/current-price/STOCK_ID(instead of STOCK_ID in the url replace it with the input which is received from the user for e.g RELIANCE) Follow-up: Change the color of the message shown on the screen depending on profit(green color) or loss(red color) ",

  "Coding: Use the following API –[https://stock-api.desaihetav.repl.co/list](https://stock-api.desaihetav.repl.co/list), and get a list of items. Display id and name of each item in the list in following format ID – Name(Done using Vanilla JS on VSCODE)Followup: Show an error message if any error comes up (using catch handlers for handling it)",
];

let conceptQuestion = [
  "What is DOM ?",
  "What is an API ?",
  "What is Semantic HTML ?",
  "Explain about promises",
  "What are the ways of linking stylesheet to HTML file",
  "1. Consequences of placing script tag inside head",
  "Differences between Vanila JS & React JS ",
  "Declarative vs Imperative programming ",
  "Use of components in React ",
  "JavaScript uses Actual DOM React uses Virtual DOM [suggested by Prakhar]",
  "Explain CSS Box model",
  "Difference between Inline Elements vs Block Elements.",
  " 1. What is Git ?",
  " What is GitHub ?",
  ". Explain Branching concept of GitHub and the uses of it.",
  " What is Promises ?",
  " What are Callback functions (question asked in this manner: What's the 2nd parameter passed to the addEventListener) and why aren't curly braces added to it ",
  "What are the different ways of linking CSS stylesheets to HTML ?",
  "  If a particular h1 tag has all the 3 types of styles applied(inline, style in head tag as well as external) then which one will be applied finally",
  "Why is useState being used in React ?",
  "Explain differences between Semantic and Non-Semantic HTML with examples. ",
  "Reason of placing the script tag at the bottom in the index.html file.",
  "Within querySelector you have used class selector. Are we allowed to try something else like id?",
  "Difference between class and id",
  "Speak about the box model",
  "What's the feature of React that you like most?",
  "Speak about the use of Fetch in your application.",
  "What do you think Javascript is synchronous or asynchronous?",
  " In the label tag what can be passed into its for attribute how is it related to the input section",
  "Explain the step by step working of Fetch API along with promises",
  "What you like about React? You solved the questions using Vanilla JS then asked the reason of why not using React JS to solve it",
  "Explain the differences between innerText and innerHTML",
];
let counterOne = 0;
let counterTwo = 0;

function get(type) {
  if (type == "coding") {
    coding.innerHTML = codingQuestion[counterOne++];
  } else {
    concept.innerHTML = "";
    for (let i = 0; i < 4; i++) {
      concept.innerHTML += `${conceptQuestion[counterTwo++]} <br>`;
    }
  }
}
