const body = document.getElementById("body");
const showQuiz = async () => {
  const response = await fetch(
    "https://menu-api.parent-content-parent-content-service.workers.dev/quiz",
  );

  const quizs = await response.json();

  quizs.forEach((quiz, index) => {
    const box = document.createElement("div");
    const question = document.createElement("h1");
    question.textContent = quiz.question;
    box.appendChild(question);
    box.className = "";
    body.appendChild(box);

    quiz.options.forEach((option) => {
      const options = document.createElement("button");
      options.textContent = option;
      box.appendChild(options);
    });
  });
};

showQuiz();
