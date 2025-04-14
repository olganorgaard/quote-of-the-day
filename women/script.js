const button = document.querySelector(".btn");
const par = document.querySelector(".par");

const quotes = [
    "I like to be a free spirit. Some don't like that, but that's the way I am.",
    "A mother's arms are more comforting than anyone else's.",
    "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you.",
    "Family is the most important thing in the world.",
    "I don't go by the rule book ... I lead from the heart, not the head.",
    "I knew what my job was; it was to go out and meet the people and love them.",
    "If you find someone you love in your life, then hang onto them.",
    "Only do what your heart tells you.",
    "Every one of us needs to show how much we care for each other and, in the process, care for ourselves.",
    "Everyone needs to be valued. Everyone has the potential to give something back.",
    "I'd like to be a queen in people's hearts.",
    "The biggest disease this day and age is that of people feeling unloved.",
    "I will fight for my children on any level so they can reach their potential.",
    "Don't call me an icon. I'm just a mother trying to help.",
    "Hugs can do great amounts of good — especially for children.",
    "When you are happy you can forgive a great deal.",
    "You can't comfort the afflicted with afflicting the comfortable.",
    "Anywhere I see suffering, that is where I want to be, doing what I can.",
    "People think that at the end of the day a man is the only answer. Actually, a fulfilling job is better for me.",
    "I want to walk into a room, be it a hospital for the dying or a hospital for the sick children, and feel that I am needed. I want to do, not just to be.",
    "The kindness and the affection from the public have carried me through some of the most difficult periods and always your love and affection have eased the journey.",
    "I am not a political figure, I am a humanitarian figure, always was, always will be.",
    "Nothing brings me more happiness than trying to help the most vulnerable people in society. It is a good and essential part of my life, a kind of destiny.",
    "I want my boys to have an understanding of people’s emotions, their insecurities, people’s distress, and their hopes and dreams.",
    "Call me Diana, not Princess Diana.",
    "Being a princess isn’t all that it’s cracked up to be.",
    "It’s vital that the monarchy keeps in touch with the people. It’s what I try and do.",
    "The greatest problem in the world today is intolerance. Everyone is so intolerant of each other.",
    "I like to be a free spirit. Some don’t like that, but that’s the way I am.",
    "You can’t comfort the afflicted with afflicting the comfortable.",
    "Life is just a journey.",
    "A mother’s arms are more comforting than anyone else’s.",
    "Hugs can do great amounts of good—especially for children.",
    "I’d like to be a queen in people’s hearts.",
    "I don’t go by the rule book ... I lead from the heart, not the head.",
    "Don’t call me an icon. I’m just a mother trying to help.",
    "If men had to have babies, they would only ever have one each.",
    "I think the biggest disease the world suffers from in this day and age is the disease of people feeling unloved.",
    "If you find someone you love in life, you must hang on to it, and look after it. You must protect it.",
    "Everyone of us needs to show how much we care for each other and, in the process, care for ourselves.",
    "I don't go by the rule book. I lead from the heart, not the head.",
    "People think that at the end of the day, a man is the only answer. Actually, a fulfilling job is better for me."
]

button.addEventListener("click", () => {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})