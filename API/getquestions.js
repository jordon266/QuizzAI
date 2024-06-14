const { GoogleGenerativeAI } = require("@google/generative-ai");


// Access your API key as an environment variable (see "Set up your API key" above)
apikey = process.env.API_KEY
const genAI = new GoogleGenerativeAI(apikey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
// console.log(process.env.API_KEY)

// Ethans Function
async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  

  // You can simulate a back-and-forth conversation with the AI using the startChat function. Here i'm using the story of the tortoise and the hare

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: 'A Hare was making fun of the Tortoise one day for being so slow. "Do you ever get anywhere?" he asked with a mocking laugh. "Yes," replied the Tortoise, "and I get there sooner than you think. Ill run you a race and prove it." The Hare was much amused at the idea of running a race with the Tortoise, but for the fun of the thing he agreed. So the Fox, who had consented to act as judge, marked the distance and started the runners off. The Hare was soon far out of sight, and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare, he lay down beside the course to take a nap until the Tortoise should catch up. The Tortoise meanwhile kept going slowly but steadily, and, after a time, passed the place where the Hare was sleeping. But the Hare slept on very peacefully; and when at last he did wake up, the Tortoise was near the goal. The Hare now ran his swiftest, but he could not overtake the Tortoise in time. The race is not always to the swift.' }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 1000,
    },
  });

  for(let i = 0; i<10; i++){
    const msg = "ask a question about the text i provided, and give me 4 multiple choice answers for it, with only 1 correct answer. Please give me the correct answer after the question.";

    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    }

}
 
run()