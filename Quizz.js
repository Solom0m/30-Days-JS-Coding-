const query = [
    {
        question: "Which is the fastest animal in the world",
        responses: [
            {text: "Cheetah", correct: false},
            {text: "Falcon" ,  correct: true},
            {text: "Lion" , correct: false},
            {text: "Cat", correct: false},
        ]
    },
      { 
         question: "Which of this is a Nigerian car brand",
        responses: [
            {text: "Toyota", correct: false},
            {text: "Audi", correct: false},
            {text: "Innoson", correct: true},
            {text: "Chevolet", correct: false},
        ]
},
    {
        question: "How many siblings does Solomon have",
        responses: [
            {text: "3", correct: true},
            {text: "5", correct: false},
            {text: "2", correct: false},
            {text: "4", correct: false},
        ]
    },
    {
        question: " Who is the owner of the spaceX and tesla company",
        responses: [
            {text: "John Doe", correct: false},
            {text: "Elon Musk", correct: true},
            {text: "Mark Zukerberg", correct: false},
            {text: "Jack Griffin", correct: false},
        ]
    },
    {
        question: "Which of the following is regarded as the best federal university in Nigeria",
        responses:[
            {text: "UNILAG", correct: true},
            {text: "UNIBADAN", correct: false},
            {text: "UNN", correct: false},
            {text: "ABSU", correct: false},
        ]
    },
    {
        question: " How many states are in nigeria",
        responses: [
            {text: "14", correct: false},
            {text: "305", correct: false},
            {text: "36", correct: true},
            {text: "35", correct: false},
        ]
    }
];


    const questionElement = document.getElementById("question");
     const answerButtons =  document.getElementById("answer-buttons");
     const nextButton = document.getElementById("next-btn");

       let currentQueryIndex = 0;
       let score = 0;

       function startQuiz(){
        currentQueryIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next"
        showQuestion()
       }

       function showQuestion(){
        resetState();
        let currentQuestion = query[currentQueryIndex];
        let questionNo = currentQueryIndex + 1
        questionElement.innerHTML = questionNo +". "+ currentQuestion.question

        currentQuestion.responses.forEach(response => {
            const button = document.createElement("button");
            button.innerHTML = response.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(response.correct){
                button.dataset.correct = response.correct
            }
            button.addEventListener("click", selectAnswer);
        })
       }

       function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild)
        }
       }


       startQuiz()