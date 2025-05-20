const quizData = [
  {
    question: "¿En qué capa del modelo OSI se encuentra el protocolo IP?",
    options: ["Capa de Transporte", "Capa de Enlace de Datos", "Capa de Red", "Capa de Aplicación"],
    answer: 2
  },
  {
    question: "¿Qué dirección IPv4 se reserva para broadcast en una red?",
    options: ["La que termina en .0", "La que termina en .255", "La que termina en .1", "La que termina en .254"],
    answer: 1
  },
  {
    question: "¿Cuál es la unidad de transmisión mínima en Ethernet?",
    options: ["64 bytes", "46 bytes", "60 bytes", "72 bytes"],
    answer: 0
  },
  {
    question: "¿Qué protocolo asigna dinámicamente direcciones IP?",
    options: ["DNS", "DHCP", "ARP", "HTTP"],
    answer: 1
  },
  {
    question: "¿Cuál es la longitud estándar de un prefijo de red IPv6 local de enlace (link-local)?",
    options: ["/64", "/56", "/128", "/48"],
    answer: 0
  }
];

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultBox = document.getElementById('result-box');
const scoreEl = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quizData[current];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const label = document.createElement('label');
    label.className = 'option';
    label.innerHTML = `<input type="radio" name="option" value="${idx}"> ${opt}`;
    optionsEl.appendChild(label);
  });
  nextBtn.disabled = true;
  document.querySelectorAll('input[name="option"]').forEach(input => {
    input.addEventListener('change', () => {
      nextBtn.disabled = false;
    });
  });
}

function showResult() {
  document.getElementById('quiz-box').style.display = 'none';
  resultBox.classList.remove('hidden');
  scoreEl.textContent = `Obtuviste ${score} de ${quizData.length} respuestas correctas.`;
}

nextBtn.addEventListener('click', () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return;
  if (parseInt(selected.value, 10) === quizData[current].answer) {
    score++;
  }
  current++;
  if (current < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

restartBtn.addEventListener('click', () => {
  current = 0;
  score = 0;
  resultBox.classList.add('hidden');
  document.getElementById('quiz-box').style.display = 'block';
  loadQuestion();
});

// Inicializar
loadQuestion();
