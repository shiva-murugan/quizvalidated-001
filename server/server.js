const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const answers = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['London', 'Paris', 'Rome'],
    answer: 'Paris',
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter'],
    answer: 'Mars',
  },
  {
    id: 3,
    question: 'Which is the largest ocean in the world?',
    options: ['Indian Ocean', 'Pacific Ocean', 'Atlantic Ocean'],
    answer: 'Pacific Ocean'
  }
]
app.get('/api/answerData', (req, res) =>{
  res.json(answers);
})
app.get('/api/questionsData', (req, res) => {
  
   const questionsData = [
        {
          id: 1,
          question: 'What is the capital of France?',
          options: ['London', 'Paris', 'Rome'],
         
        },
        {
          id: 2,
          question: 'Which planet is known as the Red Planet?',
          options: ['Venus', 'Mars', 'Jupiter'],
         
        },
        {
          id: 3,
          question: 'Which is the largest ocean in the world?',
          options: ['Indian Ocean', 'Pacific Ocean', 'Atlantic Ocean'],
        
        }
      ]
    res.json(questionsData);

});

app.post('/api/useranswer', (req, res) => {
  const userResponses = req.body.userData; // Assuming the array is sent as { data: [...array] }
  // Process the array data here

  // Send a response back to the frontend

  console.log(req.body.userData);

console.log('these are selected by users',userResponses);

  // res.status(200).json({userResponses});

  let score = 0;

  for (let i = 0; i < answers.length; i++) {
  
   
    const correctAnswer = answers[i]?.answer;
    const userAnswer = userResponses[i]?.isSelected;
  
    if (correctAnswer === userAnswer) {
      score++;
    }
  }

  console.log(score);
  res.status(200).json({ score });


  // dataArray.forEach((question) => {
  //   if (question.isSelected === question.answer) {
  //     score++;
  //   }
  // });

});



app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});