

let myQuestions = [
	{
		question: "Who was the first president of the Reuplic of Kenya?",
		answers: {
		  a: 'Raila Omollo',
		  b: 'Jomo Kenyatta',
		  c: 'Mwai Kibaki'
		},
		correctAnswer: 'b'
	  },
	  {
		question: "Who was the first prime minister of Kenya?",
		answers: {
		  a: 'Uhuru Kenyatta',
		  b: 'William Ruto',
		  c: 'Jomo Kenyatta'
		},
		correctAnswer: 'c'
	  },
	  {
		  question: "when was kenya colonized by the british?",
		  answers: {
			a: '11 June 1963',
			b: '11 June 1920',
			c: '1963'
		  },
		  correctAnswer: 'b'
		},
		{
		  question: " What ethnic group can be found in Kenya??",
		  answers: {
			a: 'Mijikenda',
			b: 'Masai',
			c: 'Kikuyu'
		  },
		  correctAnswer: 'b'
		},
		{
		  question: "Where in Africa would you find Kenya? ",
		 
		  answers: {
			a: 'West Africa',
			b: 'Central Africa',
			c: 'Eastern Africa',
			
		  },
		  correctAnswer: 'c'
		},
		{
		  question: "How many countries does Kenya border? ",
		 
		  answers: {
			a: '4',
			b: '6',
			c: '5',
			
		  },
		  correctAnswer: 'c'
		},
		{
		  question: "How many countries does Kenya border? ",
		 
		  answers: {
			a: '4',
			b: '6',
			c: '5',
			
		  },
		  correctAnswer: 'c'
		},
		{
		  question: " Which ocean does Kenya border? ",
		 
		  answers: {
			a: 'Lake victoria',
			b: 'Tana river',
			c: 'Indian',
			
		  },
		  correctAnswer: 'c'
		}
];

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		let output = [];
		let answers;

		// for each question...
		for(let i=0; i<questions.length; i++){
			
			answers = [];

			for(letter in questions[i].answers){

				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
		
		let answerContainers = quizContainer.querySelectorAll('.answers');
		
		let userAnswer = '';
		let numCorrect = 0;
		
		for(let i=0; i<questions.length; i++){

			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			if(userAnswer===questions[i].correctAnswer){
			
				numCorrect++;

				answerContainers[i].style.color = 'lightgreen';
			}
		
			else{
			
				answerContainers[i].style.color = 'red';
			}
		}

		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	showQuestions(questions, quizContainer);
	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}