const fastify = require("fastify")();

const {getQuestions, getAnswers, getQuestionsAnswers, getQuestion, getAnswer, getQuestionAnswer} = require('./p4-module.js');


fastify.get("/cit/question", (request, reply) => {
    const questions = getQuestions();
    reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send({error:'', statusCode: 200, questions});
});

fastify.get("/cit/answer", (request, reply) => {
    const answers = getAnswers();
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: '', statusCode: 200, answers});
});

fastify.get("/cit/questionanswer", (request, reply) => {
    const questions_answers = getQuestionsAnswers();
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: '', statusCode: 200, questions_answers});
});

fastify.get("/cit/question/:number", (request, reply) => {
    const {number} = request.params;
    const question = getQuestion(number);
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: '', statusCode: 200, question});
});

fastify.get("/cit/answer/:number", (request, reply) => {
    const {number} = request.params;
    const answer = getAnswer(number);
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: '', statusCode: 200, answer});
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const {number} = request.params;
    const questionanswer = getQuestionAnswer(number);
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: '', statusCode: 200, questionanswer});
});


fastify.get("*", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send({error: 'Route not found', statusCode: 404});
});


const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
