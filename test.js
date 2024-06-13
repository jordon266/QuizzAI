const { GoogleGenerativeAI } = require("@google/generative-ai");
const env = require('dotenv')
env.config({debug: true });
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyC85XZ_x97RKpoYrSVPXNqZL6jCbzh3nN8");


// Ethans Function
async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  

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

//Jordon's part
const textdata = [
  {
      reading: "Taking advantage of a weekend visit to your family\
  home, you have washed and dried your clothing and are removing the clothing\
  from the dryer. You notice that your socks seem to be stuck to your shirts. Even\
  shaking the shirt will not remove the socks. When you pull the socks off the\
  shirt, they peel off with a crackling sound. As you carry your dry clothes into your\
  bedroom, you wonder why those effects occurred. You are still wondering while\
  you comb your hair in the bathroom. You turn on the faucet and unintentionally\
  hold the comb you just used next to the stream of water. The stream of water\
  bends to the side, toward the comb! You move the comb to different positions\
  and notice that the stream of water deviates to the side by different amounts.\
  Your father wanders by while you are doing this and says, 'That's exactly the\
  technique we use in designing our high-speed manufacturing printers. Go look at\
  the cans of food in the kitchen. How do you think the expiration dates are printed\
  on the cans? Even more fascinating, how do we print code numbers on eggs?'\
  You never quite understood what your father does for a living, but are now quite\
  intrigued. You know that he designs some kind of industrial printers. You ask him\
  what he means about your bathroom experiment. He tells you to do some online\
  research on continuous inkjet printing."
  }
  
      
  ];
  

  async function summaryres(data){
    const text = await getsummary(data);
   
    console.log(text);
   let resp = await {type: "summary", title: "generictitle", summary:text, date: Date.now.toString()};
    return new Promise( function(resolve,reject)
    { 
      resolve(resp);
    }
     
    );
  }
 // console.log(textdata[0].reading)
async function getsummary(data) {

  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  // const prompt = "Write a story about a magic backpack."
const prompt = "summarize the content";
  // const result = await model.generateContent(prompt);
  const result = await model.generateContent([prompt,data]);
  const response = await result.response;
  const text = response.text();
  return text
}

// test function just to see if it prints
async function test ()
{
  const nsummary= await summaryres(textdata[0].reading);
  console.log(await nsummary)
}

test()


run();