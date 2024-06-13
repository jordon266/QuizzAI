const { GoogleGenerativeAI } = require("@google/generative-ai");
const env = require('dotenv')
env.config({debug: true });
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
// import { textdata } from "./testdata";
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
   let resp = await {type: "summary", title: "generictitle", summary:text, date: Date.now};

    
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


async function test ()
{
  const nsummary= await summaryres(textdata[0].reading);
  console.log(await nsummary)
}

test()