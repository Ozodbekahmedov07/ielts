

document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(function() {
        document.body.style.opacity = 1;
    }, 100);
});

   
function openModal(id) {
    document.getElementById(id).style.display = "block";
}


function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function openWindow(title, text) {
    let newWin = window.open("", "_blank", "width=600,height=400");
    newWin.document.open();
    newWin.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    padding: 30px; 
                    background: #000;   /* qora fon */
                    color: #fff;        /* oq yozuv */
                }
                h2 { 
                    font-size: 28px;
                    margin-bottom: 15px;
                    color: #fff;        /* sarlavha oq */
                }
                p { 
                    font-size: 20px; 
                    line-height: 1.6; 
                    color: #fff;        /* matn ham to‘liq oq */
                }
            </style>
        </head>
        <body>
            <h2>${title}</h2>
            <p>${text}</p>
        </body>
        </html>
    `);
    newWin.document.close();
}


  
  let current = 0;
  let score = 0;
  let selectedOption = null;
  
  function openModal(id) {
    document.getElementById(id).style.display = "block";
    showQuestion();
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
    current = 0;
    score = 0;
  }
  
  function showQuestion() {
    const container = document.getElementById("question-container");
    const nextBtn = document.getElementById("next-btn");
  
    if (current < questions.length) {
      const q = questions[current];
      container.innerHTML = `
        <p><b>${current + 1}. ${q.q}</b></p>
        ${q.options.map(opt => `<button class="option" onclick="selectOption(this, '${opt}')">${opt}</button>`).join("")}
      `;
      nextBtn.classList.add("hidden");
      selectedOption = null;
    } else {
      container.innerHTML = `
        <p class="result">Natijangiz: ${score} / ${questions.length}</p>
      `;
      nextBtn.classList.add("hidden");
    }
  }
  
  function selectOption(element, answer) {
    const options = document.querySelectorAll(".option");
    options.forEach(opt => opt.classList.remove("selected"));
    element.classList.add("selected");
    selectedOption = answer;
    checkAnswer(answer);
  }
  
  function checkAnswer(answer) {
    if (answer === questions[current].answer) score++;
    document.getElementById("next-btn").classList.remove("hidden");
  }
  
  function nextQuestion() {
    current++;
    showQuestion();
  }
  