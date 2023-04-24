const { Configuration,OpenAIApi } = require("openai") 

const Config=new Configuration({
    apiKey:'MY API'
})

const openai=new OpenAIApi(Config) 

async function sendToGPT(msg){

   const res= await openai.createChatCompletion({
        model:'gpt-3.5-turbo',
        messages:[
            {role:'user', content:msg}
        ]
    }) 

    return res;
}

( async ()=>{

    const res=await sendToGPT('מתי הוקמה מדינת ')

    console.log(res.data.choices[0]); 
})()