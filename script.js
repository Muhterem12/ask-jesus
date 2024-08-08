const answers = [
  "You’re going to hell, don’t even try.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "You’re destined for chaos, accept it.",
  "Maybe the answer is to stop asking.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "The divine is laughing at your confusion.",
  "Every question leads to more confusion, deal with it.",
  "The universe has better things to do than answer you.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "The answer is not what you want to hear.",
  "Jesus loves you.",
  "Jesus loves you.",
  "Jesus loves you.",
  "Jesus loves you.",
  "Jesus loves you.",
  "Your fate is written in chaos, embrace it.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "You’re lost in the cosmic shuffle.",
  "Even the divine is baffled by your questions.",
  "You’re destined for a life of unanswered queries.",
  "The answers are out of your reach, and they’re laughing.",
  "Maybe you should try asking a different deity.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "Your journey is a quest for nothing, enjoy the trip.",
  "The cosmic winds blow against you.",
  "You’re swimming in a sea of confusion.",
  "The divine’s not interested in your problems today.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "The universe is indifferent to your plight.",
  "You’re on your own with this one.",
  "The stars have better things to do than guide you.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "Even I can’t help you with this mess.",
  "You’re chasing shadows in the cosmic void.",
  "The answer is as elusive as a mirage.",
  "Your fate is a series of unfortunate events.",
  "Maybe the real answer is to stop asking.",
  "The divine has checked out on this one.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "Your quest for answers is a wild goose chase.",
  "The cosmic joke is on you.",
  "You’re out of luck with this question.",
  "Even gods need a break from your inquiries.",
  "The universe is not amused by your persistence.",
  "Your answers are in the land of ‘maybe’.",
  "You’re adrift in the sea of uncertainty.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "Your questions are too convoluted to answer.",
  "The stars are laughing at your confusion.",
  "You’re in for a rough ride, cosmic style.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "You’re on a wild ride with no destination.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "Your fate is to search endlessly for clarity.",
  "The universe is playing a trick on you.",
  "Even the divine is shaking its head.",
  "You’re caught in the cosmic crossfire.",
  "The stars have turned their back on you.",
  "The divine has left the building.",
  "You’re stuck in a cosmic loop of confusion.",
  "Your quest for answers is a cosmic dead end.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The answer is beyond your comprehension.",
  "The cosmic winds are howling against you.",
  "You’re on your own with this cosmic riddle.",
  "Even gods can’t untangle this mess.",
  "Your fate is sealed in confusion.",
  "The divine is enjoying your perplexity.",
  "You’re lost in a maze with no exit.",
  "🖕🏻 Fuck you, you dont deserve heaven",
  "The universe has given up on your questions.",
  "You’re chasing illusions in the cosmic haze.",
  "The stars have aligned against you.",
  "The answer is lost in the void of space.",
  "You’re out of luck with this cosmic query.",
  "The divine is taking a vacation from you.",
  "You’re adrift in a sea of cosmic chaos.",
  "Your destiny is a grand adventure—enjoy the journey!",
  "The divine has a beautiful plan for you, just wait and see!",
  "Every twist in your path is leading you to something amazing.",
  "Heaven’s got a fantastic blueprint for your life—stay tuned!",
  "Your destiny is unfolding like a divine novel, and you're the hero!",
  "God’s got a plan that’s even better than your wildest dreams.",
  "The universe is aligning to bring you closer to your true path.",
  "Your future is bright with divine promise and grace.",
  "Even the stars are aligning to make your destiny shine!",
  "Your path is paved with purpose and filled with divine surprises.",
  "Heaven’s got a perfect roadmap just for you—follow it with faith!",
  "Your destiny is like a masterpiece in progress—each step adds to the beauty.",
  "God’s guiding hand is leading you to your most extraordinary self.",
  "Your future is a divine adventure—embrace it with excitement!",
  "The universe is orchestrating a symphony just for you and your destiny.",
  "You’re on a sacred journey—every moment is part of a grand plan.",
  "God’s got a stellar plan for you—trust in the divine timing!",
  "Your destiny is being crafted with love and divine precision.",
  "Even the angels are thrilled about the amazing path you’re on.",
  "Your future is full of divine potential and heavenly possibilities.",
  "Every question you ask is a step closer to discovering your destiny.",
  "God’s wisdom is guiding you to the perfect destination.",
  "The universe is conspiring to bring you closer to your true purpose.",
  "Your path is illuminated with divine light—just follow it with faith.",
  "Heaven’s guidance is leading you to a future full of blessings.",
  "Your destiny is a divine adventure—enjoy the ride!",
  "God’s plan for you is like a treasure map, leading you to hidden gems.",
  "The stars are your co-pilots on this amazing journey of destiny.",
  "Your future is bright and full of divine possibilities.",
  "Every step you take is guided by a loving and divine hand.",
  "God’s plan is unfolding perfectly—trust in the divine process.",
  "Your path is a journey of faith, joy, and heavenly surprises.",
  "Heaven’s got a unique and wonderful plan just for you.",
  "Your destiny is a beautiful story—keep turning the pages with faith.",
  "God’s guidance is like a compass—always pointing you in the right direction.",
  "The universe is rooting for you and your amazing destiny!",
  "Your future is crafted with divine love and celestial joy.",
  "Heaven’s wisdom is leading you to your most extraordinary self.",
  "Every question you ask is a spark that lights up your destiny.",
  "Your path is filled with divine appointments and heavenly encounters.",
  "God’s got a magnificent plan for you—just keep the faith!",
  "The universe is aligning the stars for your perfect destiny.",
  "Your future is a canvas, and God is painting it with divine beauty.",
  "Heaven’s got a great sense of humor and an even greater plan for you!",
  "Your destiny is unfolding like a divine garden—nurture it with faith.",
  "God’s plan is like a perfectly orchestrated symphony—beautiful and harmonious.",
  "Your future is guided by divine love and heavenly purpose.",
  "The universe is setting the stage for your grand destiny.",
  "Every step you take is leading you closer to your divine purpose.",
  "God’s wisdom is your guide on this amazing journey of destiny.",
  "Your path is a series of divine moments leading to your ultimate goal.",
  "Heaven’s plan for you is filled with joy, blessings, and endless possibilities.",
  "Your destiny is a divine adventure—embrace every moment with excitement!",
  "The universe is working wonders to bring your dreams to fruition.",
  "Your future is illuminated by divine light and heavenly promise.",
  "God’s plan is unfolding perfectly—trust in the process and enjoy the journey.",
  "Your destiny is a grand design, crafted with divine love and purpose.",
  "Heaven’s guidance is leading you to the best possible future.",
  "Your path is a beautiful journey of faith, growth, and divine surprises.",
  "God’s got a unique and wonderful destiny in store just for you!",
  "The universe is cheering you on—your destiny is unfolding beautifully.",
  "Every moment is a step closer to the divine plan for your life.",
  "Your future is a testament to divine grace and celestial favor.",
  "Heaven’s got a wonderful story unfolding—stay tuned for your role in it!",
  "Your destiny is a divine masterpiece in the making—enjoy the process!",
  "The universe is aligning everything perfectly for your amazing future.",
  "God’s guidance is leading you to a destiny filled with blessings and joy.",
  "The universe is working behind the scenes to bring your dreams to life.",
  "Your destiny is like a radiant star—bright and full of promise.",
  "Heaven’s got a wonderful plan—just keep following the path with faith.",
  "Your future is a divine adventure—embrace each moment with joy!",
  "God’s plan for you is unfolding perfectly—trust in the divine timing.",
  "The universe is orchestrating a symphony of blessings for your destiny.",
  "Your path is guided by divine wisdom and heavenly love.",
  "Heaven’s guidance is leading you to a future filled with joy and fulfillment.",
  "Your destiny is a divine journey—enjoy the ride and trust the process!",
];

// ! VARIABLES
const inputField = document.querySelector(".input-ask");
const jesusAnswer = document.querySelector(".answer-part");
const jesusAnswerText = document.querySelector(".jesus-answer-text");
const loadingContainer = document.querySelector(".loading-container");

// ! GETTING RANDOM NUMBER
const getRandomAnswer = function () {
  const answer = Math.floor(Math.random() * answers.length);
  return answer;
};

// ! RANDOM NUMBER FOR TIMER
const time = Math.random() * 3000 + 4000;

// ! CHECK WHITE SPACE
const checkWhiteSpace = function () {};

// ! MAKE JESUS ANSWER APPEAR
inputField.addEventListener("click", function () {
  console.log("click is working");
  jesusAnswer.classList.remove("hidden");
});

const getAnswer = function () {
  inputField.addEventListener("keydown", function (e) {
    // ! WHEN 'ENTER IS PRESSED
    if (e.key === "Enter") {
      e.preventDefault();
      const noSpace = inputField.value.trim();

      // ! CHECK SPACE
      if (noSpace === "") {
        alert("Please input a question, DONT MAKE JESUS ANGRY!!!");
      } else {
        console.log("working");
        loadingContainer.classList.remove("hidden");
        // jesusAnswer.innerHTML = ""; // * CAUSE OF ERROR // changing all html not text content
        inputField.value = "";
        jesusAnswerText.style.color = "#333";
        jesusAnswerText.classList.add("hidden");

        setTimeout(function () {
          jesusAnswerText.classList.remove("hidden");
          console.log("working after few seconds");
          // loadingContainer.classList.add("hidden");

          loadingContainer.classList.add("hidden");
          const currentAnswer = answers[getRandomAnswer()];
          jesusAnswerText.innerHTML = currentAnswer;
        }, time);
      }
    }
  });
};

getAnswer();

// ! HIDE ANSWER PART WHEN CLICKING OUTSIDE
document.addEventListener("click", function (event) {
  // Check if the clicked target is outside the question-asking section
  if (!event.target.closest(".chat-part")) {
    jesusAnswer.classList.add("hidden");
    jesusAnswerText.innerHTML = "";
  }
});
