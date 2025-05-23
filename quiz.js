let quizCompleted = false; // Indicateur de complétion

const quizData = [

    {
        question: "1. Quels sont les principaux objectifs du RGPD ? <br> <span style='font-size:11px;'>*Sélectionnez toutes les réponses correctes.</span>",
        a: "Renforcer la protection des données personnelles des citoyens de l'UE.",
        b: "Permettre aux entreprises de vendre les données personnelles sans consentement.",
        c: "Harmoniser les règles de protection des données à travers l’UE.",
        d: "Faciliter l'accès des gouvernements aux données personnelles.",
        correct: ["a", "c"]
    },

 {
	question: "2. Parmi les propositions suivantes, lesquelles correspondent à des principes fondamentaux du RGPD ? <br> <span style='font-size:11px;'>*Sélectionnez toutes les réponses correctes.</span>",
        a: "Les données des patients doivent être conservées de façon sécurisée le plus longtemps possible.",
        b: "Éviter de collecter des données superflues.",
        c: "Les données doivent être collectées pour des finalités déterminées, explicites et légitimes.",
        d: "Ne pas corriger les données même si elles sont inexactes.",
        correct: ["b", "c"]
},

 {
	question: "3. Identifiez les droits des patients selon le RGPD parmi les options ci-dessous : <br> <span style='font-size:11px;'>*Sélectionnez toutes les réponses correctes.</span>",
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
            quiz.innerHTML = `Félicitations ! Vous avez terminé cette formation. <br> Nous vous remercions pour votre engagement et votre participation.`;
            submitBtn.style.display = 'none';
        }
    } else {
        feedback.innerHTML = 'Réponse incorrecte, veuillez réessayer.';
    }
}

document.addEventListener('DOMContentLoaded', loadQuiz);
