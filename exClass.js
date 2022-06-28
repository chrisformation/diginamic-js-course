(function() {
  class Card {
    constructor(question, answer) {
      this.question = question;
      this.answer = answer;
    }

    checkAnswer() {
      console.log(`Question: ${this.question}`);
      console.log(`Answer: ${this.answer}`);
    }
  }

  class JsCard extends Card{
    constructor(question, answer) {
      super(question, answer);

      console.log(`JSBin: https://jsbin.com/hivimofora/1/edit?html,js,console`)
    }
  }

  new Card("What is the capital of France?", "Paris").checkAnswer();
  new JsCard("test", "test").checkAnswer();
})();
