var questions = [
    {
      question: "Who is the Father of Modern Philosophy?",
      answer: "Rene Descartes"
    },
    {
      question: "Who stated that the unexamined life is not worth living?",
      answer: "Socrates"
    },
    {
      question: "Who stated that the soul is composed of 3 parts? (Rational, Spirited, and Appetitive)",
      answer: "Plato"
    },
    {
      question: "Who stated that man is of a bifurcated nature?",
      answer: "Augustine"
    },
    {
      question: "Who is known as the most eminent 13th century scholar?",
      answer: "Thomas Aquinas"
    },
    {
      question: "Who stated that the self is nothing but a bundle of impressions?",
      answer: "David Hume"
    },
    {
      question: "According to Mauss, what are the two faces of the self?",
      answer: "Personne and Moi"
    },
    {
      question: "Who argued that the self should not be seen as a static entity that stays constant through and through?",
      answer: "Social Constructivists"
    },
    {
      question: "Who stated that the way that human persons develop is with the use of language acquisition and interaction with others?",
      answer: "Mead and Vygotsky"
    },
    {
      question: "Who argued that because mothers take the role of taking care of children, there is a tendency for girls to imitate the same and reproduce the same kind of mentality of women?",
      answer: "Nancy Chodorow"
    },
    {
      question: "What is considered as loci of the self that is subject to alteration and change?",
      answer: "Gender"
    },
    {
      question: "Who conceptualized that the self has two aspects? (I and Me)",
      answer: "William James"
    },
    {
      question: "There are two types of comparison, the downward comparison and ____________.",
      answer: "Upward"
    },
    {
      question: "What do you call the period of life, generally between the ages of 10 an 15 years old?",
      answer: "Puberty"
    },
    {
      question: "What is the 4th component of the Material Self?",
      answer: "Home"
    },
    {
      question: "What do you call the performance of ceremonial acts prescribed by a tradition or sacred law?",
      answer: "Ritual"
    },
    {
      question: "What do you call the set of cultural beliefs?",
      answer: "Religion"
    },
    {
      question: "What do you call the biological state that corresponds to what we might call a man or a woman?",
      answer: "Sex"
    },
    {
      question: "Who stated that gender was performative?",
      answer: "Judith Butler"
    },
    {
      question: "Who made the quote 'We are what we have and what we posses'",
      answer: "Russel Belk"
    },
    {
      question: "Who solved the mind-body dichotomy?",
      answer: "Gilbert Ryle"
    },
    {
      question: "What is the full name of our UTS Professor? (First name, Middle Inital, Last name)",
      answer: "Maria Laya T. Lara"
    },
  ];
  var currentQuestionIndex = 0;
  var shuffledAnswerElement = document.getElementById("shuffledAnswer");

    function displayQuestion() {
      var questionElement = document.getElementById("question");
      var shuffledAnswerElement = document.getElementById("shuffledAnswer");

      var question = questions[currentQuestionIndex].question;
      var answer = questions[currentQuestionIndex].answer;
      var shuffledAnswer = shuffleString(answer);

      questionElement.textContent = question;
      shuffledAnswerElement.textContent = shuffledAnswer;
    }

    function checkAnswer() {
      var answerElement = document.getElementById("answer");
      var messageElement = document.getElementById("message");
      var userAnswer = answerElement.value.toLowerCase();
      var correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

      if (userAnswer === correctAnswer) {
        messageElement.textContent = "Correct! Proceeding to the next question...";
        currentQuestionIndex++;
        answerElement.value = "";
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
        } else {
          messageElement.textContent = "Congratulations! You have completed the game!";
          answerElement.disabled = true;
        }
      } else {
        messageElement.textContent = "Sorry, the answer is not correct. Please try again.";
      }
    }

    function shuffleString(str) {
      var array = str.split("");
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array.join("");
    }
    function reshuffleWord() {
      var answer = questions[currentQuestionIndex].answer;
      var shuffledAnswer = shuffleString(answer);
      shuffledAnswerElement.textContent = shuffledAnswer;
    }

    displayQuestion();