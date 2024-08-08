// const { GoogleGenerativeAI } = require("@google/generative-ai");
import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
const apikey = process.env.googleapikey
console.log(apikey + "this is the apikey");
const genAI = new GoogleGenerativeAI(apikey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
// console.log(process.env.API_KEY)
// //Jordon's part

  
    export default async function summaryres(data){
    //   console.log(apikey)
    // return data
     const createdate = Date.now().toString()
     const text = await getsummary(data);
     let resp = await {summary:text, date: createdate};
      return new Promise( function(resolve,reject)
      { 
        resolve(resp);
      }
       
      );
    }
   // console.log(textdata[0].reading)
  async function getsummary(data) {
  console.log(apikey + "this is the apikey")
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    // const prompt = "Write a story about a magic backpack."
  const prompt = "summarize the content";
  
    // const result = await model.generateContent(prompt);
    const result = await model.generateContent([prompt,data]);
    const response = await result.response;
    const text = response.text();
    return text
  }
  
  // test function just to see if it prints
  
  // test()

