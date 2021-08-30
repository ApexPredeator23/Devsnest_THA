const quizDB=[

{
    Questions:"Q1: What is the full form of WWE?",
    a:"World Wide Entertainment",
    b:"World Wrestling Example",
    c:"Wrestling World Eleven",
    d:"World Wrestling  Entertainment",
    ans: "ans4"
},

{
    Questions:"Q2: What is the full form of HTML?",
    a:"Hyper Text Makeup Language",
    b:"Hyper Text Markup Language",
    c:"Hyper Twice Makeup Language",
    d:"Hypo Text Markup Language",
    ans: "ans2"
},

{
    Questions:"Q3: What is the full form of WWE?",
    a:"World Wide Entertainment",
    b:"World Wrestling Example",
    c:"Wrestling World Eleven",
    d:"World Wrestling  Entertainment",
    ans: "ans4"
},
];

const Questions=document.querySelector('.Questions');
const option1 =document.querySelector('#option1');
const option2 =document.querySelector('#option2');
const option3 =document.querySelector('#option3');
const option4 =document.querySelector('#option4');
const submit =document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const ShowScore = document.querySelector('#ShowScore');

let questionCount = 0;
let score=0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    Questions.innerText = questionList.Questions;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();

const getCheckAnswer= () =>{
    let answer;
    answers.forEach((currAnsEle)=>{
        if(currAnsEle.checked){
            answer = currAnsEle.id;
        }      
    });
    return answer;
};

const deselectAll = () =>{
    answers.forEach((currAnsEle)=> currAnsEle.checked = false);
} ;


submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
            ShowScore.innerHTML = ' <h3> You scored  (${ score }) / (${ quizDB.length }) </h3> <button class="btn" onclick="location.reload()"> Play Again </button> ';

            

            ShowScore.classList.remove('ScoreAnswer');
    }
});

