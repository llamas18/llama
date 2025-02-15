document.addEventListener("DOMContentLoaded", function () {
    // Анимация появления секций при прокрутке
    const sections = document.querySelectorAll("section");
    
    function revealOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    // Таймер обратного отсчёта
    const countdown = document.getElementById("countdown");
    const weddingDate = new Date("May 29, 2025 00:00:00").getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = weddingDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        countdown.innerHTML = ${days}д ${hours}ч ${minutes}м ${seconds}с;
    }
setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Плавный скролл по якорным ссылкам
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Анимация кнопок
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
            button.style.transition = "transform 0.2s ease-in-out";
        });
        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
    
    // Появление заголовков с задержкой
    const headings = document.querySelectorAll("h1, h2");
    headings.forEach((heading, index) => {
        setTimeout(() => {
            heading.classList.add("visible");
        }, index * 300);
    });

    // Параллакс-эффект для фона
    window.addEventListener("scroll", function () {
        const scrolled = window.scrollY;
        document.body.style.backgroundPositionY = -(scrolled * 0.2) + "px";
    });

    // Анимация появления текста по буквам
    const animatedTexts = document.querySelectorAll(".animated-text");
    animatedTexts.forEach(text => {
        let letters = text.innerText.split("");
        text.innerHTML = "";
        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.innerText = letter;
            span.style.animationDelay = ${i * 50}ms;
            text.appendChild(span);
        });
    });

    // Эффект плавающих частиц (конфетти)
    const confettiContainer = document.createElement("div");
    confettiContainer.classList.add("confetti-container");
    document.body.appendChild(confettiContainer);

    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
        confettiContainer.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
    setInterval(createConfetti, 300);

    // Светящиеся точки при наведении
    document.addEventListener("mousemove", function (e) {
        const spark = document.createElement("div");
        spark.classList.add("spark");
        spark.style.left = ${e.clientX}px;
        spark.style.top = ${e.clientY}px;
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 1000);
    });
});