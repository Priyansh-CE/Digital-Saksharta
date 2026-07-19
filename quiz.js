/* ==========================================
   Digital Saksharta Quiz
========================================== */

const questions = [

{
question:"What does OTP stand for?",
options:[
"One Time Password",
"Online Transfer Password",
"Original Text Password",
"Only Trusted Person"
],
answer:0
},

{
question:"Which website is secure?",
options:[
"http://example.com",
"https://example.com",
"example.fake",
"unknown.xyz"
],
answer:1
},

{
question:"Should you share your UPI PIN?",
options:[
"Yes",
"No",
"Only with friends",
"Only on WhatsApp"
],
answer:1
},

{
question:"Which document can be stored in DigiLocker?",
options:[
"Aadhaar",
"Driving Licence",
"Marksheet",
"All of these"
],
answer:3
},

{
question:"Which symbol indicates a secure website?",
options:[
"Lock Icon",
"Star",
"Heart",
"Bell"
],
answer:0
},

{
question:"What should you never share?",
options:[
"OTP",
"Password",
"Bank PIN",
"All of these"
],
answer:3
},

{
question:"What is Cyber Safety?",
options:[
"Safe internet usage",
"Playing games",
"Watching movies",
"Buying phones"
],
answer:0
},

{
question:"Which app stores digital documents?",
options:[
"Instagram",
"DigiLocker",
"WhatsApp",
"YouTube"
],
answer:1
},

{
question:"Aadhaar is issued by?",
options:[
"UIDAI",
"Google",
"Microsoft",
"GTU"
],
answer:0
},

{
question:"Digital India promotes?",
options:[
"Digital Services",
"Digital Literacy",
"Online Governance",
"All of these"
],
answer:3
},

{
question:"Which payment app uses UPI?",
options:[
"PhonePe",
"Google Pay",
"BHIM",
"All of these"
],
answer:3
},

{
question:"Full form of UPI?",
options:[
"Unified Payments Interface",
"Universal Payment Internet",
"United Public Interface",
"Unique Payment ID"
],
answer:0
},

{
question:"Strong passwords should contain?",
options:[
"Only letters",
"Only numbers",
"Letters, numbers and symbols",
"Only your name"
],
answer:2
},

{
question:"Phishing means?",
options:[
"Catching fish",
"Online fraud",
"Playing games",
"Photo editing"
],
answer:1
},

{
question:"Which is a government document app?",
options:[
"DigiLocker",
"Facebook",
"Instagram",
"Snapchat"
],
answer:0
}

];

let current = 0;
let score = 0;
let selected = -1;
let time = 900;

const question = document.getElementById("question");
const options = document.getElementById("options");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer");
/* ==========================================
   Load Question
========================================== */

function loadQuestion(){

questionNumber.innerHTML = `Question ${current + 1} / ${questions.length}`;

question.innerHTML = questions[current].question;

options.innerHTML = "";

selected = -1;

questions[current].options.forEach((option,index)=>{

const button = document.createElement("button");

button.className = "btn-outline";

button.style.width = "100%";

button.style.display = "block";

button.style.margin = "12px 0";

button.style.padding = "15px";

button.style.textAlign = "left";

button.innerHTML =

`${String.fromCharCode(65+index)}. ${option}`;

button.onclick = function(){

selected = index;

document.querySelectorAll("#options button").forEach(btn=>{

btn.style.background = "";

btn.style.color = "";

btn.style.borderColor = "#d1d5db";

});

button.style.background = "#2563EB";

button.style.color = "#fff";

button.style.borderColor = "#2563EB";

};

options.appendChild(button);

});

}


/* ==========================================
   Next Question
========================================== */

function nextQuestion(){

if(selected === -1){

alert("Please select an answer.");

return;

}

if(selected === questions[current].answer){

score++;

}

current++;

if(current < questions.length){

loadQuestion();

}

else{

finishQuiz();

}

}


/* ==========================================
   Previous Question (Optional)
========================================== */

function previousQuestion(){

if(current>0){

current--;

loadQuestion();

}

}


/* ==========================================
   Timer
========================================== */

function startTimer(){

const timerInterval = setInterval(()=>{

time--;

const minutes = Math.floor(time/60);

const seconds = time%60;

timer.innerHTML =

`${minutes}:${seconds<10?"0":""}${seconds}`;

if(time<=0){

clearInterval(timerInterval);

finishQuiz();

}

},1000);

}


/* ==========================================
   Start Quiz
========================================== */

loadQuestion();

startTimer();
/* ==========================================
   Finish Quiz
========================================== */

function finishQuiz(){

const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("resultSection");

quizSection.style.display = "none";
resultSection.style.display = "block";

const percent = Math.round((score / questions.length) * 100);

localStorage.setItem("quizScore", percent);

// Highest Score

const bestScore = Number(localStorage.getItem("bestScore")) || 0;

if(percent > bestScore){

localStorage.setItem("bestScore", percent);

}

document.getElementById("finalScore").innerHTML =

`🏆 Your Score : ${score} / ${questions.length} (${percent}%)`;

let message = "";

if(percent >= 90){

message = "🌟 Outstanding! You are a Digital Literacy Champion.";

}

else if(percent >= 70){

message = "🎉 Congratulations! You passed the quiz successfully.";

}

else if(percent >= 50){

message = "👍 Good effort! Revise the modules and try again.";

}

else{

message = "📚 Keep learning and take the quiz again.";

}

document.getElementById("message").innerHTML = message;


// Certificate Unlock

const certificateBtn = document.getElementById("certificateBtn");

if(percent >= 70){

certificateBtn.style.display = "inline-flex";

localStorage.setItem("certificateUnlocked","true");

}

else{

certificateBtn.style.display = "none";

localStorage.setItem("certificateUnlocked","false");

}


// Leaderboard (Highest Score)

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

leaderboard.push({

name:"Guest Student",

score:percent,

date:new Date().toLocaleDateString()

});

leaderboard.sort((a,b)=>b.score-a.score);

leaderboard = leaderboard.slice(0,5);

localStorage.setItem("leaderboard",JSON.stringify(leaderboard));

showLeaderboard();

}


/* ==========================================
   Leaderboard
========================================== */

function showLeaderboard(){

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

let html = "<br><h3>🏅 Top Scores</h3><br>";

html += "<table style='width:100%;border-collapse:collapse;'>";

html += "<tr>";

html += "<th>Rank</th>";

html += "<th>Student</th>";

html += "<th>Score</th>";

html += "</tr>";

leaderboard.forEach((player,index)=>{

html += `

<tr>

<td style="padding:10px;text-align:center;">

${index+1}

</td>

<td style="padding:10px;text-align:center;">

${player.name}

</td>

<td style="padding:10px;text-align:center;">

${player.score}%

</td>

</tr>

`;

});

html += "</table>";

document.getElementById("message").innerHTML += html;

}


/* ==========================================
   Restart Quiz
========================================== */

function restartQuiz(){

location.reload();

}


/* ==========================================
   Auto Save Progress
========================================== */

window.addEventListener("beforeunload",()=>{

localStorage.setItem("currentQuestion",current);

localStorage.setItem("currentScore",score);

});


/* ==========================================
   Welcome Message
========================================== */

console.log("Digital Saksharta Quiz Loaded Successfully ✅");
