let answerNum = 1;
var quizNum = 0;
var questionObj = $('.question');
var answerList = $('.answer_list');
var totalScore = 0;
var tempIdx = 0;
const totalQuiz = 2;
const numOfAns = 4;
let quizArray = new Array(totalQuiz);

class QuizContent{
    _question = "";
    _ans = new Array(totalQuiz);
    _correct = 0;
    constructor(q, a, c){
        this._question = q;
        this._correct = c;
        for (var i = 0; i < a.length; i++){
            this._ans[i] = a[i];
        }
    }
    get question(){
        return this._question;
    }
    set question(q){
        this._question = q;
    }
    get correct(){
        return this._correct;
    }
    set correct(c){
        this._correct = c;
    }
    get ans(){
        return this._ans;
    }
    set ans(a){
        this._ans = a;
    }
}


// main sequence

// init quiz
var tempQ = "Q1. 다음 중 가장 키가 큰 사람은?";
var tempA = new Array(numOfAns);
tempA[0] = "창모";
tempA[1] = "빈지노";
tempA[2] = "블랙넛";
tempA[3] = "염따";
quizArray[tempIdx++] = new QuizContent(tempQ, tempA, 0);
var tempQ = "Q2. 다음 중 가장 키가 작은 사람은?";
tempA[0] = "사이먼 도미닉";
tempA[1] = "박재범";
tempA[2] = "타블로";
tempA[3] = "그레이";
quizArray[tempIdx++] = new QuizContent(tempQ, tempA, 3);
showQuiz(quizNum++);

// functions

// show alert window
function showResult(qn, an) {
    var resultText = "";
    if (qn == 0) {
        resultText += '창모가 183cm로 가장 큽니다. ^ㅗ^';
    }
    else {
        resultText += '그레이가 168cm로 가장 작습니다. ㄴOoOㄱ';
    }
    alert(resultText);
    showQuiz(qn + 1);
}

function showQuiz(n) {
    if (n == 0) {
        // add answer list
        answerList.append("<li><button type='button' style='font-size:xx-large' class='button0'>test_text</button></li>");
        answerList.append("<li><button type='button' style='font-size:xx-large' class='button1'> </button></li>");
        answerList.append("<li><button type='button' style='font-size:xx-large' class='button2'> </button></li>");
        answerList.append("<li><button type='button' style='font-size:xx-large' class='button3'> </button></li>");
        // set text
        questionObj.text(quizArray[n].question);
        for (var i = 0; i < numOfAns; i++){
            $('.button' + i).text(quizArray[n].ans[i]);
            $('.button' + i).one('click', function(e){
                console.log($(e.target).attr('class'));
                showResult(0, i);
                if (i == quizArray[0].correct){
                    totalScore += 10;
                }
            });
        }
    }
    else if (n == 1) {
        questionObj.text(quizArray[n].question);
        for (var i = 0; i < numOfAns; i++){
            $('.button' + i).text(quizArray[n].ans[i]);
            $('.button' + i).one('click', function(){
                showResult(1, i);
            });
        }
    }
    else {
        questionObj.text('끝!');
        answerList.empty();
    }
}


