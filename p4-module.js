const {data} = require('./p4-data.js');


function getQuestions(){
    return data.map((obj) => obj.question);
}
console.log(getQuestions());

function getAnswers(){
    return data.map((obj) => obj.answer);
}
console.log(getAnswers());

function getQuestionsAnswers(){
    return data.map((obj) => Object.assign({}, obj));
}
console.table(getQuestionsAnswers());


function getQuestion(number = ''){
   const index = parseInt(number) -1;
   const question = data[index]?.question;
   return{
    question: question || '',
    number: index +1,
    error: question ? '' : 'No question found',
   } ;
}
console.log(getQuestion(3))

function getAnswer(number = ''){
    const index = parseInt(number) -1;
    const answer = data[index]?.answer;
    return{
        answer: answer || '',
        number: index +1,
        error: answer ? '' : 'No answer found'
    }; 
}
console.log(getAnswer(1))

function getQuestionAnswer(number = ''){
    const index = parseInt(number) -1;
    const question = data[index]?.question;
    const answer = data[index]?.answer;
    return{
        question: question || '',
        answer: answer || '',
        number: index +1,
        error: answer ? '' : 'No answer found'
    }; 
}
console.log(getQuestionAnswer(2))

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = true;
  const testGetAs = true;
  const testGetQsAs = true;
  const testGetQ = true;
  const testGetA = true;
  const testGetQA = true;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit
  
  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }


module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
};
