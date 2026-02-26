const quotes = [
    "Believe in yourself and everything becomes possible.",

    "Hard work beats talent when talent doesn work hard",

    "Small steps every day lead to big results",

    "Your only limit is your mind",

    "Dream big, start small, act now",

    "Success begins with self-discipline",

    "Stay positive, work hard, make it happen",

    "Mistakes are proof that you are trying",

    "Confidence is silent, insecurities are loud",

    "Push yourself, because no one else will do it for you",

    "Every day is a second chance",

    "Growth begins at the end of your comfort zone",

    "Be stronger than your excuses",

    "Focus on progress, not perfection",

    "Difficult roads often lead to beautiful destinations",

    "Learn from yesterday, live for today, hope for tomorrow",

    "Stay patient and trust your journey",

    "The best view comes after the hardest climb",

    "Do something today that your future self will thank you for",

    "Shine so bright that others find their light too",
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * 20);
    quote.textContent = quotes[index];
    
    
})