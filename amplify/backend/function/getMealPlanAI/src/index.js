const OpenAI = require("openai")

exports.handler = async function (event) {
  const openai = new OpenAI({
      apiKey: "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",
  });

  const chatCompletion = await openai.chat.completions.create({
      messages: [
        {'role': 'system', 'content':'You are a robot that takes a users data and creates them a seven day mealplan that includes the name of each dish. Only respond with the names of the dishes in order.'},
        {'role': 'user', 'content': "24 years old, 6 Feet 4 Inches tall, 235 pounds. Exclude mushrooms. Access to oven, stove top, slow cooker, microwave, toaster, blender, frying pan(s), sauce pot(s), baking sheet. Goal is to lose weight."}
      ],
      model: "gpt-3.5-turbo",
      temperature: .4
  });

  return {
    statusCode: 200,
    body: JSON.stringify(chatCompletion),
  };
  };
