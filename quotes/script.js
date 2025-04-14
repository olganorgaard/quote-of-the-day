gsap.from("h1", {y:-100, duration:2, delay:.3, opacity:0})
gsap.from("#one", {x:-100, duration:2, delay:.3, opacity:0})

const button = document.querySelector(".btn");
const par = document.querySelector(".par");

const quotes = [
   "It is very hard to be a woman, chiefly because they have to deal with men all the time. - Joseph Conrad",
    "If you want something said to you, ask a man, but if you want something done, call a woman. - Margaret Thatcher",
    "A woman must live her life the way she wants to, or she will admit that she has not lived at all. - David Lawrence",
    "A woman who knows how to feel passion needs no make-up. - Yves Saint Laurent",
    "You can't beat a woman. If you don't like trouble, you won't try. - William Faulkner",
    "If a man thinks he's beaten a woman, he's a fool who didn't notice she beat him two moves ago. - Gary Oldman",
    "A woman can make a man softer, she can make him weaker, and she can decide for herself what to do with him. That's what makes her so terrible. - Sigmund Freud",
    "To succeed, a woman must think like a queen. A queen is not afraid of failure and is not afraid to sacrifice other people's lives. - Oprah Winfrey",
    "I think I'm a mixture of simplicity and complexes, but I'm beginning to understand myself now.",
    "I never wanted to be Marilyn–it just happened. Marilyn's like a veil I wear over Norma Jeane.",
    "There isn't anybody that looks like me without clothes on.",
    "It's nice to be included in people's fantasies but you also like to be accepted for your own sake.",
    "Fame is like caviar, you know—it's good to have caviar but not when you have it at every meal.",
    "I don't mind living in a man's world as long as I can be a woman in it.",
    "I don't forgive people because I'm weak, I forgive them because I am strong enough to know people make mistakes.",
    "If you're gonna be two-faced at least make one of them pretty.",
    "Always remember to smile and look up at what you got in life.",
    "A strong man doesn't have to be dominant toward a woman. He doesn't match his strength against a woman weak with love for him. He matches it against the world.",
    "Dreaming about being an actress, is more exciting than being one.",
    "A friend tells you what you want to hear; a best friend tells you the truth.",
    "For those who are poor in happiness, each time is a first time; happiness never becomes a habit.",
    "It's far better to be unhappy alone than unhappy with someone – so far.",
    "Men who think that a woman's past love affairs lessen her love for them are usually stupid and weak.",
    "A career is wonderful, but you can’t curl up with it on a cold night.",
    "The truth is, I've never fooled anyone. I've let men sometimes fool themselves.",
    "I am not a victim of emotional conflicts. I am human.",
    "Beneath the makeup and behind the smile I am just a girl who wishes for the world."
]

button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})