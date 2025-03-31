<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz formation "Le RGPD adapté au secteur médical"</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

        body {
            font-family: 'Open Sans', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            width: 90%;
            max-width: 600px;
            margin: auto;
            overflow: hidden;
        }
        .quiz-container {
            background: #ffffff; /* Couleur de fond blanche pour le contraste */
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #003765; /* SYNLAB Darkblue */
            font-size: 1.5rem;
        }
        .question {
            font-size: 1.2rem;
            color: #003765; /* SYNLAB Darkblue */
        }
        .options {
            list-style-type: none;
            padding: 0;
        }
        .options li {
            margin: 0.5rem 0;
            color: #003765; /* SYNLAB Darkblue */
        }
        .submit-btn {
            background: #003765; /* SYNLAB Darkblue */
            color: #fff;
            border: none;
            padding: 0.5rem 1rem;
            cursor: pointer;
            border-radius: 5px;
            transition: background 0.3s;
            font-size: 1rem;
        }
        .submit-btn:hover {
            background: #002244;
        }
        .feedback {
            margin-top: 1rem;
            font-size: 1rem;
            color: red;
        }

        @media (max-width: 600px) {
            .container {
                width: 100%;
                padding: 0 1rem;
            }
            h2 {
                font-size: 1.2rem;
            }
            .question {
                font-size: 1rem;
            }
            .submit-btn {
                font-size: 0.9rem;
                padding: 0.5rem;
            }
            .feedback {
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="quiz-container">
            <h2>Quiz SYNLAB - Formation RGPD</h2>
            <div id="quiz"></div>
            <button class="submit-btn" onclick="submitQuiz()">Soumettre</button>
            <div id="feedback" class="feedback"></div>
        </div>
    </div>
    <script>
        const quizData = [
            {
                question: "1. Quels sont les deux principaux objectifs du RGPD ?",
                a: "Renforcer la protection des données personnelles des citoyens de l'UE.",
                b: "Permettre aux entreprises de vendre les données personnelles sans consentement.",
                c: "Harmoniser les règles de protection des données à travers l’UE.",
                d: "Faciliter l'accès des gouvernements aux données personnelles.",
                correct: ["a", "c"]
            },
            {
                question: "2. Parmi les propositions suivantes, lesquelles correspondent à des principes fondamentaux du RGPD ?",
                a: "Les données des patients doivent être conservées de façon sécurisée le plus longtemps possible.",
                b: "Éviter de collecter des données superflues.",
                c: "Les données doivent être collectées pour des finalités déterminées, explicites et légitimes.",
                d: "Ne pas corriger les données même si elles sont inexactes.",
                correct: ["b", "c"]
            },
            {
                question: "3. Identifiez deux droits des patients selon le RGPD :",
                a: "Accéder à leurs données médicales personnelles.",
                b: "Obliger les médecins à partager leurs données avec des tiers sans consentement.",
                c: "Demander la rectification de leurs données médicales incorrectes.",
                d: "Empêcher les hôpitaux de collecter des données médicales.",
                correct: ["a", "c"]
            },
        ];

        const quiz = document.getElementById('quiz');
        const feedback = document.getElementById('feedback');
        const submitBtn = document.querySelector('.submit-btn');

        let currentQuiz = 0;
        let score = 0;

        loadQuiz();

        function loadQuiz() {
            const currentQuizData = quizData[currentQuiz];
            quiz.innerHTML = `
                <div class="question">${currentQuizData.question}</div>
                <ul class="options">
                    <li><input type="checkbox" name="answer" value="a"> ${currentQuizData.a}</li>
                    <li><input type="checkbox" name="answer" value="b"> ${currentQuizData.b}</li>
                    <li><input type="checkbox" name="answer" value="c"> ${currentQuizData.c}</li>
                    <li><input type="checkbox" name="answer" value="d"> ${currentQuizData.d}</li>
                </ul>
            `;
            feedback.innerHTML = '';
        }

        function submitQuiz() {
            const answers = document.querySelectorAll('input[name="answer"]:checked');
            const selectedAnswers = Array.from(answers).map(answer => answer.value);
            const correctAnswers = quizData[currentQuiz].correct;

            if (selectedAnswers.length === correctAnswers.length && selectedAnswers.every(answer => correctAnswers.includes(answer))) {
                score++;
                currentQuiz++;
                feedback.innerHTML = ''; // Réinitialiser le feedback en cas de réponse correcte
                if (currentQuiz < quizData.length) {
                    loadQuiz();
                } else {
                    quiz.innerHTML = `<h3>Bien joué ! Vous avez répondu correctement à ${score}/${quizData.length} questions.</h3>`;
                    submitBtn.style.display = 'none';
                    window.removeEventListener('beforeunload', preventClose);
                }
            } else {
                feedback.innerHTML = 'Réponse incorrecte, veuillez réessayer.';
            }
        }

        function preventClose(event) {
            event.preventDefault();
            event.returnValue = '';
        }

        window.addEventListener('beforeunload', preventClose);
    </script>
</body>
</html>
