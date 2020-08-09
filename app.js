var quiz = [{
        question: "Q1.Who was the founder of Pakistan?",
        option1: "Quaid-e-Azam",
        option2: "Liaquat Ali Khan",
        option3: "Allama Iqbal",
        option4: "Sir Syed Ahmed Khan",
        correctAns: "Quaid-e-Azam"
    },
    {
        question: "Q2.When Pakistan won the Cricket World Cup?",
        option1: "2003",
        option2: "1999",
        option3: "1992",
        option4: "1996",
        correctAns: "1992"
    },
    {
        question: "Q3.The national language of Pakistan is?",
        option1: "Pushto",
        option2: "English",
        option3: "Urdu",
        option4: "Siraiki",
        correctAns: "Urdu"
    },
    {
        question: "Q4.The national Animal of Pakistan is?",
        option1: "Goat",
        option2: "Markhor",
        option3: "Lion",
        option4: "Tiger",
        correctAns: "Markhor"
    },
    {
        question: "Q5.Who wrote the national anthem of Pakistan?",
        option1: "Allama Iqbal",
        option2: "Hafeez Jalandhri",
        option3: "Faiz Ahmed Faiz",
        option4: "Ahmed Faraz",
        correctAns: "Hafeez Jalandhri"
    },
    {
        question: "Q6.When Pakistan’s Govt. approved the national Anthem?",
        option1: "1954",
        option2: "1947",
        option3: "1956",
        option4: "1980",
        correctAns: "1954"
    },
    {
        question: "Q7.Picture printed on the back of Rs. 5000 note is?",
        option1: "Faisal Mosque",
        option2: "Khyber Pass",
        option3: "State Bank",
        option4: "Quaid e Azam",
        correctAns: "Faisal Mosque"
    },
    {
        question: "Q8.Blind dolphins are found in which river of Pakistan?",
        option1: "Jhelum",
        option2: "Kabul",
        option3: "Chenab",
        option4: "Indus",
        correctAns: "Indus"
    },
    {
        question: "Q9.Pakistan’s biggest desert is?",
        option1: "Sehan",
        option2: "Chagi",
        option3: "Thar",
        option4: "Cholistan",
        correctAns: "Thar"
    },
    {
        question: "Q10.Which is the biggest airport of Pakistan?",
        option1: "Quaid e Azam International Airport, Karachi",
        option2: "Allama Iqbal International Airport, Lahore",
        option3: "Benazir International Airport, Islamabad",
        option4: "Mohenjodaro International Airport",
        correctAns: "Quaid e Azam International Airport, Karachi"
    }
]

var username = document.getElementById('username');
var questionPara = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var fname = document.getElementById('name');


function start() {
    if (fname.value == '') {
        alert("Enter your name to start the quiz");
    } else {
        document.getElementById('main-enter').style.display = 'none';
        document.getElementById('mainQ').style.display = 'block';
        username.innerHTML = document.getElementById('name').value;
        questionPara.innerHTML = quiz[0].question;
        option1.innerHTML = quiz[0].option1;
        option2.innerHTML = quiz[0].option2;
        option3.innerHTML = quiz[0].option3;
        option4.innerHTML = quiz[0].option4;
    }
}



var correctAnswerIndex = 0;
var counter = 0;
var clickedOption = false;

function trueoption(e) {
    if (e.innerText == quiz[correctAnswerIndex].correctAns) {
        e.style.backgroundColor = 'green';
        e.style.color = 'white';
        document.getElementById('option1').disabled = true;
        document.getElementById('option2').disabled = true;
        document.getElementById('option3').disabled = true;
        document.getElementById('option4').disabled = true;
        counter += 10;
        clickedOption = true;
    } else if (e.innerText !== quiz[correctAnswerIndex].correctAns) {
        e.style.backgroundColor = 'red';
        e.style.color = 'white';
        document.getElementById('option1').disabled = true;
        document.getElementById('option2').disabled = true;
        document.getElementById('option3').disabled = true;
        document.getElementById('option4').disabled = true;
        clickedOption = true;
    }
    correctAnswerIndex++;
}



var quizIndex = 1;

function next() {
    if (clickedOption == true) {

        if (quizIndex <= quiz.length - 1) {
            questionPara.innerText = quiz[quizIndex].question;
            option1.innerText = quiz[quizIndex].option1;
            option2.innerText = quiz[quizIndex].option2;
            option3.innerText = quiz[quizIndex].option3;
            option4.innerText = quiz[quizIndex].option4;
            quizIndex++;
        } else if (quizIndex > quiz.length - 1) {
            document.getElementById('mainQ').style.display = 'none'
            document.getElementById('score-box').style.display = 'block';
        }
        document.getElementById('option1').style.backgroundColor = 'white';
        document.getElementById('option1').style.color = 'black';
        document.getElementById('option2').style.backgroundColor = 'white';
        document.getElementById('option2').style.color = 'black';
        document.getElementById('option3').style.backgroundColor = 'white';
        document.getElementById('option3').style.color = 'black';
        document.getElementById('option4').style.backgroundColor = 'white';
        document.getElementById('option4').style.color = 'black';
        document.getElementById('option1').disabled = false;
        document.getElementById('option2').disabled = false;
        document.getElementById('option3').disabled = false;
        document.getElementById('option4').disabled = false;
        clickedOption = false;

    } else if (clickedOption == false) {
        alert("please choose any option");
    }

    document.getElementById('score').innerHTML = counter;

}